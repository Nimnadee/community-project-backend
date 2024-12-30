import {Product} from "../../schema/product";

export class OrderRequestDto{

    public productCounts:number[];
    public products:string[];
}