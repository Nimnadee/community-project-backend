import { Injectable} from "@nestjs/common";
import { InventoryMapper } from "src/mapper/Inventory.mapper";
import { InventoryRequestDto } from "src/model/dto/request/Inventory";
import { InventoryResponseDto } from "src/model/dto/response/Inventory";
import { Inventory } from "src/model/schema/Inventory";
import { InventoryRepository } from "src/repository/Inventory.repository";
 
@Injectable()
export class InventoryService {
	constructor(private readonly inventoryRepository: InventoryRepository,
	            private readonly inventoryMapper: InventoryMapper){}

    public async findById(id: string): Promise<InventoryResponseDto> {
        const inventory: Inventory = await this.inventoryRepository.findById(id);
        return await this.inventoryMapper.inventoryToInventoryResponseDto(inventory);
    }

	public async findAll(): Promise<InventoryResponseDto[]> {
		const inventory: Inventory[] = await this.inventoryRepository.findAll();
		const inventoryResponseDtos: InventoryResponseDto[] = [];

		for (const p of inventory) {
			inventoryResponseDtos.push(await this.inventoryMapper.inventoryToInventoryResponseDto(p));
		}
		return inventoryResponseDtos;
	}

	public async create(inventoryRequestDto: InventoryRequestDto): Promise<InventoryResponseDto> {
		let inventory: Inventory = await this.inventoryMapper.inventoryRequestDtoToInventory(inventoryRequestDto);
		inventory = await this.inventoryRepository.create(inventory);
		return this.inventoryMapper.inventoryToInventoryResponseDto(inventory);
	}

	public async update(id: string, inventoryRequestDto:InventoryRequestDto): Promise<InventoryResponseDto> {
		let inventory: Inventory = await this.inventoryMapper.inventoryRequestDtoToInventory(inventoryRequestDto);
		inventory = await this.inventoryRepository.update(id, inventory);
		return this.inventoryMapper.inventoryToInventoryResponseDto(inventory);
	}

	public async delete(id: string): Promise<InventoryResponseDto> {
		const inventory: Inventory = await this.inventoryRepository.delete(id);
		return this.inventoryMapper.inventoryToInventoryResponseDto(inventory);
	}

}
