import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../model/schema/order';


@Injectable()
export class OrderRepository {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
  ) {}
  public async findById(id: string): Promise<Order> {
    return this.orderModel.findById(id);
  }

  public async findAll(): Promise<Order[]> {
    return this.orderModel.find();
  }

  public create(order: Order): Promise<Order> {
    const createdOrder = new this.orderModel(order);
    return createdOrder.save();
  }

}
