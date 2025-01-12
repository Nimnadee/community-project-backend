import {Injectable} from "@nestjs/common";
import { Expenses } from "../model/schema/Expenses";
import { ExpensesResponseDto } from "../model/dto/response/Expenses";
import { ExpensesRequestDto } from "src/model/dto/request/Expenses";

@Injectable()
export class ExpensesMapper {

	// constructor(private readonly studentRepository: StudentRepository,
	// 	        private readonly categoryRepository: CategoryRepository,
	// 			private readonly technologyRepository:TechnologyRepository) {}

	public async expensesToExpensesResponseDto(expenses: Expenses) {
		const expensesResponseDto: ExpensesResponseDto = new ExpensesResponseDto();
		expensesResponseDto.id =  expenses._id.toString();
		expensesResponseDto.type =  expenses.type;
		expensesResponseDto.cost =  expenses.cost;

		return expensesResponseDto;
	}

	public async expensesRequestDtoToExpenses(expensesRequestDto: ExpensesRequestDto) {
		const expenses: Expenses = new Expenses();
		expenses.type = expensesRequestDto.type;
		expenses.cost = expensesRequestDto.cost;
		 
		  return expenses;
		}

}
