import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Product} from "../model/schema/product";



@Injectable()
export class ProductRepository {

    public constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

    public async findById(id: string): Promise<Product> {
        return this.productModel.findById(id);
    }

    public async findAll(): Promise<Product[]> {
        return this.productModel.find();
    }

    public async create(product: Product): Promise<Product> {
        return this.productModel.create(product);
    }

    public async update(id: string, product: Product): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, product, {new: true});
    }

    public async delete(id: string): Promise<Product>{
        return this.productModel.findByIdAndDelete(id);
    }


}
