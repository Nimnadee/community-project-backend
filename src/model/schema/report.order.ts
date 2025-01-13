import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from './product';

@Schema({ collection: 'order-reports' })
export class OrderReport extends Document {
  @Prop({ required: true })
  totalOrder: number;

  @Prop({ required: true })
  totalRevenue: number;

  @Prop({ type: Array, required: true })
  items: { id: string; totalPrice:number; productCounts:number[]; products:Product[]; date: Date }[];

  @Prop({ required: true })
  generatedAt: Date;
  
}


export const OrderReportSchema = SchemaFactory.createForClass(OrderReport);
