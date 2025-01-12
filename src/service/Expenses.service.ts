import { Injectable} from "@nestjs/common";
import { ExpensesMapper } from "src/mapper/Expenses.mapper";
import { ExpensesRequestDto } from "src/model/dto/request/Expenses";
import { ExpensesResponseDto } from "src/model/dto/response/Expenses";
import { Expenses } from "src/model/schema/Expenses";
import { ExpensesRepository } from "src/repository/Expenses.repository";
 
@Injectable()
export class ExpensesService {
	constructor(private readonly expensesRepository: ExpensesRepository,
	            private readonly expensesMapper: ExpensesMapper){}

    public async findById(id: string): Promise<ExpensesResponseDto> {
        const expenses: Expenses = await this.expensesRepository.findById(id);
        return await this.expensesMapper.expensesToExpensesResponseDto(expenses);
    }

	public async findAll(): Promise<ExpensesResponseDto[]> {
		const expenses: Expenses[] = await this.expensesRepository.findAll();
		const expensesResponseDtos: ExpensesResponseDto[] = [];

		for (const p of expenses) {
			expensesResponseDtos.push(await this.expensesMapper.expensesToExpensesResponseDto(p));
		}
		return expensesResponseDtos;
	}

	public async create(expensesRequestDto: ExpensesRequestDto): Promise<ExpensesResponseDto> {
		let expenses: Expenses = await this.expensesMapper.expensesRequestDtoToExpenses(expensesRequestDto);
		expenses = await this.expensesRepository.create(expenses);
		return this.expensesMapper.expensesToExpensesResponseDto(expenses);
	}

	public async update(id: string, expensesRequestDto:ExpensesRequestDto): Promise<ExpensesResponseDto> {
		let expenses: Expenses = await this.expensesMapper.expensesRequestDtoToExpenses(expensesRequestDto);
		expenses = await this.expensesRepository.update(id, expenses);
		return this.expensesMapper.expensesToExpensesResponseDto(expenses);
	}

	public async delete(id: string): Promise<ExpensesResponseDto> {
		const expenses: Expenses = await this.expensesRepository.delete(id);
		return this.expensesMapper.expensesToExpensesResponseDto(expenses);
	}

}
