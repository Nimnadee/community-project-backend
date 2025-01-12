import {Body, Controller, HttpStatus, Post, Put, Res} from "@nestjs/common";
import {OrderService} from "../service/order.service";
import {InventoryRequestDto} from "../model/dto/request/Inventory";
import {Response} from "express";
import {OrderRequestDto} from "../model/dto/request/order";

@Controller("/order")
export class OrderController{
    constructor(private readonly orderService:OrderService) {}

    @Post()
    public async create(@Body() orderRequestDto:OrderRequestDto,@Res() response:Response){
        const result=await this.orderService.create(orderRequestDto);
        response.set(HttpStatus.CREATED).send(result);
}


}