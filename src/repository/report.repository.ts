import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report } from '../model/schema/report';

@Injectable()
export class ReportRepository {
  constructor(@InjectModel(Report.name) private readonly reportModel: Model<Report>) {}

  // Save a new report
  async create(reportData: Partial<Report>): Promise<Report> {
    const report = new this.reportModel(reportData);
    return report.save();
  }

  // Find all reports
  async findAll(): Promise<Report[]> {
    return this.reportModel.find().exec();
  }

  // Find a report by ID
  async findById(id: string): Promise<Report | null> {
    return this.reportModel.findById(id).exec();
  }

  async delete(id: string): Promise<Report | null>{
    return this.reportModel.findByIdAndDelete(id).exec();
  }
 
}
