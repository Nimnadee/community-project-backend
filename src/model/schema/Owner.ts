import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types } from "mongoose";
 
@Schema({ collection: "Owner" })
export class Owner {

    public _id: Types.ObjectId;

    @Prop({ required: true })
    public name: string;

    @Prop({ required: true })
    public password: string;

  

}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
