import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Inventory } from "src/model/schema/Inventory";

@Injectable()
export class  InventoryRepository {

	public constructor(@InjectModel( Inventory.name) private readonly  inventoryModel: Model<Inventory>) {}

	public async findById(id: string): Promise< Inventory> {
		return this.inventoryModel.findById(id);
	}

	public async findAll(): Promise< Inventory[]> {
		return this.inventoryModel.find();
	}

	public async create( inventory:  Inventory): Promise< Inventory> {
		return this.inventoryModel.create( inventory);
	}

	public async update(id: string,  inventory:  Inventory): Promise< Inventory> {
		return this.inventoryModel.findByIdAndUpdate(id,  inventory, {new: true});
	}

	public async delete(id: string): Promise< Inventory>{
		return this.inventoryModel.findByIdAndDelete(id);
	}
}
