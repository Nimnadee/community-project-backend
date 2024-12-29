import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ collection: 'Order' })
export class Order {
  public _id: Types.ObjectId;
  // @Prop({ required: true })
  // public totalPrice: number;

  @Prop({ required: true })
  public productCount: number[];

  @Prop({ required: true })
  public date: Date;

  // @Prop({required:true})
  // public product:product[];
}
export const OrderSchema = SchemaFactory.createForClass(Order);

