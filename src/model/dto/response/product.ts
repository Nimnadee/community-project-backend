import {FoodCategory} from "../../../utils/food.category";
import {FoodSize} from "../../../utils/food.size";

export class ProductResponseDto {
    public id: string;
    public name: string;
    public category: FoodCategory;
    public size: FoodSize;
    public price: number;
    public productImage: string;

}