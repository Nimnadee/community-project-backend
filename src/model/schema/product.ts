import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import {FoodCategory} from "../../utils/food.category";
import {FoodSize} from "../../utils/food.size";

@Schema({ collection: 'Product', timestamps:true})
export class Product {
   public _id: Types.ObjectId;

   @Prop({ required: true })
   public name: string;

   @Prop({ required: true })
   public category: FoodCategory;

   @Prop({ required: true })
   public size: FoodSize;

   @Prop({ required: true })
   public price: number;

   @Prop({ required: false })
   public productImage: string;

   

}
export const ProductSchema = SchemaFactory.createForClass(Product);

