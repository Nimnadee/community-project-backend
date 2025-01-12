import {Injectable} from "@nestjs/common";
import { Inventory } from "src/model/schema/Inventory";
import { InventoryResponseDto } from "src/model/dto/response/Inventory";
import { InventoryRequestDto } from "src/model/dto/request/Inventory";

@Injectable()
export class InventoryMapper {

	public async inventoryToInventoryResponseDto(inventory: Inventory) {
		const inventoryResponseDto: InventoryResponseDto = new InventoryResponseDto();
		inventoryResponseDto.id =  inventory._id.toString();
		inventoryResponseDto.quantity =  inventory.quantity;
		inventoryResponseDto.cost =  inventory.cost;
		inventoryResponseDto.item = inventory.item;

		return inventoryResponseDto;
	}

	public async inventoryRequestDtoToInventory(inventoryRequestDto: InventoryRequestDto) {
		const inventory: Inventory = new Inventory();
		inventory.quantity = inventoryRequestDto.quantity;
		inventory.cost = inventoryRequestDto.cost;
		inventory.item = inventoryRequestDto.item;
		 
		  return inventory;
    }

}
