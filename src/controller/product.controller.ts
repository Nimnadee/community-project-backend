import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from "@nestjs/common";
import { ProductService } from "src/service/product.service";
import {ProductRequestDto} from "../model/dto/request/product";
import { Response } from "express";

 

@Controller("/products")
export class ProductController {

	constructor(private readonly productService: ProductService) {}
	@Get("/:id")
	public async findById(@Param() params: any, @Res() response: Response) {
		const result = await this.productService.findById(params.id);
		response.set(HttpStatus.OK).send(result);
	}

	@Get()
	public async findAll(@Res() response: Response) {
		const result = await this.productService.findAll();
		response.set(HttpStatus.OK).send(result);
	}

	@Post()
	public async create(@Body() productRequestDto: ProductRequestDto, @Res() response: Response) {
		const result = await this.productService.create(productRequestDto);
		response.set(HttpStatus.CREATED).send(result);
	}

	@Put("/:id")
	public async update(@Param() params: any, @Body() productRequestDto: ProductRequestDto, @Res() response: Response) {
		const result = await this.productService.update(params.id, productRequestDto);
		response.set(HttpStatus.OK).send(result);
	}

	@Delete("/:id")
	public async delete(@Param() params: any, @Res() response: Response) {
		await this.productService.delete(params.id);
		response.set(HttpStatus.NO_CONTENT).send({});
	}
	
}
