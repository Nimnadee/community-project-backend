import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderReport } from '../model/schema/report.order';

@Injectable()
export class OrderReportRepository {
  constructor(@InjectModel(OrderReport.name) private readonly orderReportModel: Model<OrderReport>) {}

  // Save a new report
  async create(reportData: Partial<OrderReport>): Promise<OrderReport> {
    const report = new this.orderReportModel(reportData);
    return report.save();
  }

  // Find all reports
  async findAll(): Promise<OrderReport[]> {
    return this.orderReportModel.find().exec();
  }

  // Find a report by ID
  async findById(id: string): Promise<OrderReport | null> {
    return this.orderReportModel.findById(id).exec();
  }

  async delete(id: string): Promise<OrderReport | null>{
    return this.orderReportModel.findByIdAndDelete(id).exec();
  }
 
}
