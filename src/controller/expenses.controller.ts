import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from "@nestjs/common";
import { Response } from "express";
import { ExpensesRequestDto } from "../model/dto/request/Expenses";
import { ExpensesService } from "../service/Expenses.service";
 


@Controller("/expenses")
export class ExpensesController {

	constructor(private readonly expensesService: ExpensesService) {}

	@Get("/:id")
	public async findById(@Param() params: any, @Res() response: Response) {
		const result = await this.expensesService.findById(params.id);
		response.set(HttpStatus.OK).send(result);
	}

	@Get()
	public async findAll(@Res() response: Response) {
		const result = await this.expensesService.findAll();
		response.set(HttpStatus.OK).send(result);
	}

	@Post()
	public async create(@Body() expensesRequestDto: ExpensesRequestDto, @Res() response: Response) {
		const result = await this.expensesService.create(expensesRequestDto);
		response.set(HttpStatus.CREATED).send(result);
	}

	@Put("/:id")
	public async update(@Param() params: any, @Body() expensestRequestDto: ExpensesRequestDto, @Res() response: Response) {
		const result = await this.expensesService.update(params.id, expensestRequestDto);
		response.set(HttpStatus.OK).send(result);
	}

	@Delete("/:id")
	public async delete(@Param() params: any, @Res() response: Response) {
		await this.expensesService.delete(params.id);
		response.set(HttpStatus.NO_CONTENT).send({});
	}
	
}
