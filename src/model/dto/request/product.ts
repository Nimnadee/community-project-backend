import {FoodCategory} from "../../../utils/food.category";
import {FoodSize} from "../../../utils/food.size";

export class ProductRequestDto {
    public name: string;
    public category: FoodCategory;
    public size: FoodSize;
    public price: number;

}