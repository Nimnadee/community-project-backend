import { Injectable } from '@nestjs/common';
import { OrderRequestDto } from '../model/dto/request/order';
import { Order } from '../model/schema/order';
import { OrderResponseDto } from '../model/dto/response/order';

@Injectable()
export class OrderMapper {
  public async orderRequestDtoToOrder(orderRequestDto: OrderRequestDto) {
    const order: Order = new Order();

    order.productCount = orderRequestDto.productCount;
    // order.totalPrice = orderRequestDto.totalPrice;
    // order.date = new Date();
    // orderRequestDto.product=order.product;
    return order;
  }
  public async orderToOrderResponseDto(order: Order) {
    const orderResponseDto: OrderResponseDto = new OrderResponseDto();
    orderResponseDto.productCount = order.productCount;
    // orderResponseDto.totalPrice = order.totalPrice;
    orderResponseDto.date = order.date;
    // orderResponseDto.product=order.product;
    return orderResponseDto;
  }
}
