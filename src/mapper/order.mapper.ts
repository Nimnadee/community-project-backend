import { Injectable } from '@nestjs/common';
import { OrderRequestDto } from '../model/dto/request/order';
import { Order } from '../model/schema/order';
import { OrderResponseDto } from '../model/dto/response/order';
import {OrderRepository} from "../repository/order.repository";
import {Product} from "../model/schema/product";
import {ProductRepository} from "../repository/product.Repository";
import {ProductMapper} from "./product.mapper";

@Injectable()
export class OrderMapper {

  constructor(private readonly productRepository: ProductRepository) {}

  public async orderRequestDtoToOrder(orderRequestDto: OrderRequestDto) {
    const order: Order = new Order();
    order.date = new Date();
    order.products = await Promise.all(orderRequestDto.products.map(async (id) => {
      return await this.productRepository.findById(id);
    }));
    order.productCounts = orderRequestDto.productCounts;

    return order;
  }

  public async orderToOrderResponseDto(order: Order) {
    const orderResponseDto: OrderResponseDto = new OrderResponseDto();
    orderResponseDto.id=order._id.toString();
    orderResponseDto.productCounts = order.productCounts;
    orderResponseDto.products=order.products.map(s=>ProductMapper.productToProductResponseDto(s).name);
    orderResponseDto.totalPrice = order.totalPrice;
    orderResponseDto.date = order.date;
    return orderResponseDto;

  }
}
