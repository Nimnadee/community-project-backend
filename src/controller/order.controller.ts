import {Body, Controller, Get, HttpStatus, Param, Post, Put, Res} from "@nestjs/common";
import {OrderService} from "../service/order.sevice";
import {InventoryRequestDto} from "../model/dto/request/Inventory";
import {Response} from "express";
import {OrderRequestDto} from "../model/dto/request/order";

@Controller("/order")
export class OrderController{
    constructor(private readonly orderService:OrderService) {}

    @Get("/:id")
    public async findById(@Param() params: any, @Res() response: Response) {
        const result = await this.orderService.findById(params.id);
        response.set(HttpStatus.OK).send(result);
    }

    @Get()
    public async findAll(@Res() response: Response) {
        const result = await this.orderService.findAll();
        response.set(HttpStatus.OK).send(result);
    }

    @Post()
    public async create(@Body() orderRequestDto:OrderRequestDto,@Res() response:Response){
        const result=await this.orderService.create(orderRequestDto);
        response.set(HttpStatus.CREATED).send(result);
}


}