import { Injectable } from '@nestjs/common';
import { OrderMapper } from '../mapper/order.mapper';
import { OrderRequestDto } from '../model/dto/request/order';
import { Order } from '../model/schema/order';
import { OrderRepository } from '../repository/order.repository';
import {OrderResponseDto} from "../model/dto/response/order";
import { OrderReport } from 'src/model/schema/report.order';
import { OrderReportRepository } from 'src/repository/order.report.repository';



@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderMapper:OrderMapper,
    private readonly orderReportRepository: OrderReportRepository
  ) {}

  public async findById(id: string): Promise<OrderResponseDto> {
    const order: Order = await this.orderRepository.findById(id);
    return this.orderMapper.orderToOrderResponseDto(order);
  }

  public async findAll(): Promise<OrderResponseDto[]> {
    const orders: Order[] = await this.orderRepository.findAll();
    return Promise.all(orders.map(async (order) => this.orderMapper.orderToOrderResponseDto(order)));
  }


  public async create(orderRequestDto: OrderRequestDto): Promise<OrderResponseDto> {

    let order: Order =
      await this.orderMapper.orderRequestDtoToOrder(orderRequestDto);
    order.date = new Date();
    let i: number;
    order.totalPrice=0

    for(i=0;i<orderRequestDto.products.length;i++){

      order.totalPrice=order.totalPrice+order.products.at(i).price*orderRequestDto.productCounts.at(i);
    }
    order = await this.orderRepository.create(order);

    return this.orderMapper.orderToOrderResponseDto(order);
  }
  public async generateOrderReport(): Promise<OrderReport> {
      const order = await this.orderRepository.findAll();
      
      // Generate the report data
      const reportData = {
        totalOrder: order.length,
        totalRevenue: order.reduce((sum, order) => sum + (order.totalPrice || 0), 0),
        items: order.map((item) => ({
          id: item._id.toString(),
          date: item.date,
          productCounts:item.productCounts,
          totalPrice:item.totalPrice,
          products:item.products
          })),
        generatedAt: new Date(),
      };
      
      // Save the report to the database
      const savedReport = await this.orderReportRepository.create(reportData);
      
      
      return savedReport;
      }

}
