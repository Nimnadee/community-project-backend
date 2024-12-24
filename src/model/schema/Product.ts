import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ collection: 'Product', timestamps:true})
export class Product {
  
   @Prop({ required: true })
   public name: string;

   @Prop({ required: true })
   public category: string;

   @Prop({ required: true })
   public description: string;

   @Prop({ required: true })
   public price: string;

   @Prop({ required: true })
   public discount: string;

   @Prop({ required: true })
   public stock: number;

   @Prop({ required: true })
   public rating: number;
   

}
export const ProductSchema = SchemaFactory.createForClass(Product);

