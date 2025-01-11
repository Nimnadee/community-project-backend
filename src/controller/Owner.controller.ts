import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res} from "@nestjs/common";
import { Response } from "express";
import { OwnerRequestDto } from "src/model/dto/request/Owner";
import { OwnerService } from "src/service/Owner.service";
 


@Controller("owners")
export class OwnerController {

    constructor(private readonly ownerService: OwnerService) {}

    @Get("/:id")
    public async findById(@Param() params: any, @Res() response: Response) {
        const result = await this.ownerService.findById(params.id);
        response.set(HttpStatus.OK).send(result);
    }

    @Get()
    public async findAll(@Res() response: Response) {
        const result = await this.ownerService.findAll();
        response.set(HttpStatus.OK).send(result);
    }

    @Post()
    public async create(@Body() ownerRequestDto: OwnerRequestDto, @Res() response: Response) {
        const result = await this.ownerService.create(ownerRequestDto);
        response.set(HttpStatus.CREATED).send(result);
    }

    @Put("/:id")
    public async update(@Param() params: any, @Body() ownerRequestDto: OwnerRequestDto, @Res() response: Response) {
        const result = await this.ownerService.update(params.id, ownerRequestDto);
        response.set(HttpStatus.OK).send(result);
    }

    @Delete("/:id")
    public async delete(@Param() params: any, @Res() response: Response) {
        await this.ownerService.delete(params.id);
        response.set(HttpStatus.NO_CONTENT).send({});
    }
    
}
