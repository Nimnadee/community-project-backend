import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExpensesReport } from '../model/schema/report.expenses';

@Injectable()
export class ExpensesReportRepository {
  constructor(@InjectModel(ExpensesReport.name) private readonly expensesReportModel: Model<ExpensesReport>) {}

  // Save a new report
  async create(reportData: Partial<ExpensesReport>): Promise<ExpensesReport> {
    const report = new this.expensesReportModel(reportData);
    return report.save();
  }

  // Find all reports
  async findAll(): Promise<ExpensesReport[]> {
    return this.expensesReportModel.find().exec();
  }

  // Find a report by ID
  async findById(id: string): Promise<ExpensesReport | null> {
    return this.expensesReportModel.findById(id).exec();
  }

  async delete(id: string): Promise<ExpensesReport | null>{
    return this.expensesReportModel.findByIdAndDelete(id).exec();
  }
 
}
