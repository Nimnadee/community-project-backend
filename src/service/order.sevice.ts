import { Injectable } from '@nestjs/common';
import { OrderMapper } from '../mapper/order.mapper';
import { OrderRequestDto } from '../model/dto/request/order';
import { Order } from '../model/schema/order';
import { OrderRepository } from '../repository/order.repository';
import {OrderResponseDto} from "../model/dto/response/order";

@Injectable()
export class OrderService {
  constructor(
    private readonly orderMapper: OrderMapper,
    private readonly orderRepository: OrderRepository,
  ) {}

  public async create(orderRequestDto: OrderRequestDto): Promise<OrderResponseDto> {
    let order: Order =
      await this.orderMapper.orderRequestDtoToOrder(orderRequestDto);
    order.date = new Date();
    order = await this.orderRepository.create(order);

    return this.orderMapper.orderToOrderResponseDto(order);
  }
}
