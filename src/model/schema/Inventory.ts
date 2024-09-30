import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types } from "mongoose";
 
@Schema({ collection: "Inventory" })
export class Inventory {

	public _id: Types.ObjectId;

	@Prop({ required: true })
	public quantity: number;

	@Prop({ required: true })
	public cost: number;

    // @Prop({ required: true })
	// public Item: number;

}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
