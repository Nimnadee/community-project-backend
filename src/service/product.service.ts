import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import sharp from 'sharp';
import { Product } from 'src/model/schema/Product';
import { ApiResponseDto } from 'src/utils/api-response.dto';

@Injectable()
export class ProductService {
  public constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  public async findById(id: string): Promise<ApiResponseDto> {
    try {
      const product = await this.productModel.findById(id);
      return new ApiResponseDto(true, 200, 'success', product);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  public async findAll(): Promise<ApiResponseDto> {
    try {
      const products = await this.productModel.find();
      return new ApiResponseDto(true, 200, 'success', products);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  public async create(product: Product): Promise<ApiResponseDto> {
    try {
      const newProduct = await this.productModel.create(product);
      return new ApiResponseDto(true, 201, 'success', newProduct);
    } catch (err) {
      throw err;
    }
  }

  public async update(id: string, product: Product): Promise<ApiResponseDto> {
    try {
      const updatedProduct = await this.productModel.findByIdAndUpdate(
        id,
        product,
        { new: true },
      );
      return new ApiResponseDto(true, 200, 'success', updatedProduct);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  public async delete(id: string): Promise<ApiResponseDto> {
    try {
      await this.productModel.findByIdAndDelete(id);
      return new ApiResponseDto(true, 200, 'successfully deleted');
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
