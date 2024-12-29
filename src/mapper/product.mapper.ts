
import { Injectable } from "@nestjs/common";
import {ProductRequestDto} from "../model/dto/request/product";
import {Product} from "../model/schema/product";
import {ProductResponseDto} from "../model/dto/response/product";

@Injectable()
export class ProductMapper {

    public static productToProductResponseDto(product: Product) {
        if (!product) {
            console.error('product is null in productToProductResponseDto');
            return null;
        }
        const productResponseDto: ProductResponseDto = new ProductResponseDto();
        productResponseDto.id = product._id.toString();
        productResponseDto.name = product.name;
        productResponseDto.size = product.size;
        productResponseDto.price = product.price;
        productResponseDto.category = product.category;

        return productResponseDto;
    }

    public static productRequestDtoToProduct(productRequestDto: ProductRequestDto) {
        const product: Product = new Product();
        product.name = productRequestDto.name;
        product.size = productRequestDto.size;
        product.price = productRequestDto.price;
        product.category = productRequestDto.category;

        return product;
    }
}
