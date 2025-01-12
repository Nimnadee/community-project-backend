import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import {Product} from "./product";

@Schema({ collection: 'Order' })
export class Order {
  public _id: Types.ObjectId;
  
  @Prop({ required: false })
  public totalPrice: number;

  @Prop({ required: true })
  public productCounts: number[];

  @Prop({ required: true })
  public date: Date;

  @Prop({required:true})
  public products:Product[];
}
export const OrderSchema = SchemaFactory.createForClass(Order);

