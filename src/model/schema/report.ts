import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'reports' })
export class Report extends Document {
  @Prop({ required: true })
  totalItems: number;

  @Prop({ required: true })
  totalCost: number;

  @Prop({ type: Array, required: true })
  items: { id: string; item: string; quantity: number; cost: number }[];
  
  @Prop({ required: true })
  generatedAt: Date;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
