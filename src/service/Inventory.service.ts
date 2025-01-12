import { Injectable} from "@nestjs/common";
import { InventoryMapper } from "src/mapper/Inventory.mapper";
import { InventoryRequestDto } from "src/model/dto/request/Inventory";
import { InventoryResponseDto } from "src/model/dto/response/Inventory";
import { Inventory } from "src/model/schema/Inventory";
import { InventoryRepository } from "src/repository/Inventory.repository";
import { ReportRepository } from "src/repository/report.repository";
import { Report } from "../model/schema/report";


@Injectable()
export class InventoryService {
	constructor(private readonly inventoryRepository: InventoryRepository,
	            private readonly inventoryMapper: InventoryMapper,
			    private readonly reportRepository: ReportRepository
			){}

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

	async generateInventoryReport(): Promise<Report> {
		const inventories = await this.inventoryRepository.findAll();
	  
		// Generate the report data
		const reportData = {
		  totalItems: inventories.length,
		  totalCost: inventories.reduce((sum, item) => sum + item.cost, 0),
		  items: inventories.map((item) => ({
			id: item._id.toString(),
			item: item.item,
			quantity: item.quantity,
			cost: item.cost,
		  })),
		  generatedAt: new Date(),
		};
	  
		// Save the report to the database
		const savedReport = await this.reportRepository.create(reportData);
	  
		return savedReport;
	  }
	  
}
