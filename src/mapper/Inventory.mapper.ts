import {Injectable} from "@nestjs/common";
import { Inventory } from "src/model/schema/Inventory";
import { InventoryResponseDto } from "src/model/dto/response/Inventory";
import { InventoryRequestDto } from "src/model/dto/request/Inventory";

@Injectable()
export class InventoryMapper {

	// constructor(private readonly studentRepository: StudentRepository,
	// 	        private readonly categoryRepository: CategoryRepository,
	// 			private readonly technologyRepository:TechnologyRepository) {}

	public async inventoryToInventoryResponseDto(inventory: Inventory) {
		const inventoryResponseDto: InventoryResponseDto = new InventoryResponseDto();
		inventoryResponseDto.id =  inventory._id.toString();
		inventoryResponseDto.quantity =  inventory.quantity;
		inventoryResponseDto.cost =  inventory.cost;

		return inventoryResponseDto;
	}

	public async inventoryRequestDtoToInventory(inventoryRequestDto: InventoryRequestDto) {
		const inventory: Inventory = new Inventory();
		inventory.quantity = inventoryRequestDto.quantity;
		inventory.cost = inventoryRequestDto.cost;
		 
		  return inventory;
		}

}
