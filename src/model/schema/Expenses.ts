import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types } from "mongoose";
 
@Schema({ collection: "Expenses" })
export class Expenses {

	public _id: Types.ObjectId;

	@Prop({ required: true })
	public cost: number;

    @Prop({ required: true })
	public type: string;

	@Prop({ default: Date.now }) 
    public createdAt: Date;

}

export const ExpensesSchema = SchemaFactory.createForClass(Expenses);
