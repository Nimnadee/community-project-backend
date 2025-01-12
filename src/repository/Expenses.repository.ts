import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Expenses } from "src/model/schema/Expenses";

@Injectable()
export class  ExpensesRepository {

	public constructor(@InjectModel( Expenses.name) private readonly  expensesModel: Model<Expenses>) {}

	public async findById(id: string): Promise< Expenses> {
		return this.expensesModel.findById(id);
	}

	public async findAll(): Promise< Expenses[]> {
		return this.expensesModel.find();
	}

	public async create( expenses:  Expenses): Promise< Expenses> {
		return this.expensesModel.create( expenses);
	}

	public async update(id: string,  expenses:  Expenses): Promise< Expenses> {
		return this.expensesModel.findByIdAndUpdate(id,  expenses, {new: true});
	}

	public async delete(id: string): Promise< Expenses>{
		return this.expensesModel.findByIdAndDelete(id);
	}
}