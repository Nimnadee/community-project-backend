import { Injectable } from "@nestjs/common";
import {ProductResponseDto} from "../model/dto/response/product";
import {Product} from "../model/schema/product";
import {ProductMapper} from "../mapper/product.mapper";
import {ProductRequestDto} from "../model/dto/request/product";
import {ProductRepository} from "../repository/product.Repository";


@Injectable()
export class ProductService {

    constructor(private readonly productRepository:  ProductRepository,
                private readonly productMapper: ProductMapper) {}

    public async findById(id: string): Promise<ProductResponseDto> {
        const product: Product = await this.productRepository.findById(id);
        return ProductMapper.productToProductResponseDto(product);
    }

    public async findAll(): Promise<ProductResponseDto[]> {
        const products: Product[] = await this.productRepository.findAll();
        return products.map(s => ProductMapper.productToProductResponseDto(s))
    }

    public async create(productRequestDto: ProductRequestDto): Promise<ProductResponseDto> {
        let product: Product = ProductMapper.productRequestDtoToProduct(productRequestDto);
        product = await this.productRepository.create(product);
        return ProductMapper.productToProductResponseDto(product);
    }
    public async update(id: string, productRequestDto: ProductRequestDto): Promise<ProductResponseDto> {
        let product: Product = ProductMapper.productRequestDtoToProduct(productRequestDto);
        product = await this.productRepository.update(id, product);
        return ProductMapper.productToProductResponseDto(product);
    }

    public async delete(id: string): Promise<ProductResponseDto> {
        const product: Product = await this.productRepository.delete(id);
        return ProductMapper.productToProductResponseDto(product);
    }
}
