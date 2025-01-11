import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Owner } from "src/model/schema/Owner";

@Injectable()
export class  OwnerRepository {

    public constructor(@InjectModel( Owner.name) private readonly  ownerModel: Model<Owner>) {}

    public async findById(id: string): Promise< Owner> {
        return this.ownerModel.findById(id);
    }

    public async findAll(): Promise< Owner[]> {
        return this.ownerModel.find();
    }

    public async create( owner:  Owner): Promise< Owner> {
        return this.ownerModel.create(owner);
    }

    public async update(id: string,  owner:  Owner): Promise< Owner> {
        return this.ownerModel.findByIdAndUpdate(id,  owner, {new: true});
    }

    public async delete(id: string): Promise< Owner>{
        return this.ownerModel.findByIdAndDelete(id);
    }
}
