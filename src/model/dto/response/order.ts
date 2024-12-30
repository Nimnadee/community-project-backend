import {Product} from "../../schema/product";

export class OrderResponseDto {
  public id: string;
  public totalPrice: number;
  public date: Date;
  public productCounts: number[];
  public products:string[];
}
