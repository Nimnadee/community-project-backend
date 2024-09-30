import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from "@nestjs/common";
import { Response } from "express";
import { InventoryRequestDto } from "src/model/dto/request/Inventory";
import { InventoryService } from "src/service/Inventory.service";
 


@Controller("/inventories")
export class InventoryController {

	constructor(private readonly inventoryService: InventoryService) {}

	@Get("/:id")
	public async findById(@Param() params: any, @Res() response: Response) {
		const result = await this.inventoryService.findById(params.id);
		response.set(HttpStatus.OK).send(result);
	}

	@Get()
	public async findAll(@Res() response: Response) {
		const result = await this.inventoryService.findAll();
		response.set(HttpStatus.OK).send(result);
	}

	@Post()
	public async create(@Body() inventoryRequestDto: InventoryRequestDto, @Res() response: Response) {
		const result = await this.inventoryService.create(inventoryRequestDto);
		response.set(HttpStatus.CREATED).send(result);
	}

	@Put("/:id")
	public async update(@Param() params: any, @Body() inventorytRequestDto: InventoryRequestDto, @Res() response: Response) {
		const result = await this.inventoryService.update(params.id, inventorytRequestDto);
		response.set(HttpStatus.OK).send(result);
	}

	@Delete("/:id")
	public async delete(@Param() params: any, @Res() response: Response) {
		await this.inventoryService.delete(params.id);
		response.set(HttpStatus.NO_CONTENT).send({});
	}
	
}
