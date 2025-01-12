import { Controller, Delete, Get, HttpStatus, Param, Put, Res } from '@nestjs/common';
import { InventoryService } from 'src/service/Inventory.service';
import { Response } from 'express';
import { ReportRepository } from 'src/repository/report.repository';

@Controller('reports')
export class ReportController {
  constructor(private readonly inventoryService: InventoryService,
              private readonly reportRepository: ReportRepository
             ) {}

  @Get('/inventory/generate')
  public async generateInventoryReport(@Res() response: Response) {
    const report = await this.inventoryService.generateInventoryReport();
    response.status(HttpStatus.OK).send(report);
  }

  @Get('/inventory')
  public async getAllReports(@Res() response: Response) {
    try {
      const reports = await this.reportRepository.findAll();
      response.status(HttpStatus.OK).send(reports);
    } catch (error) {
      console.error('Error fetching reports:', error);
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'Failed to fetch reports' });
    }
  }
  @Get("/inventory/:id")
  public async getReportById(@Param() params:any, @Res() response: Response) {
    try {
      const reports = await this.reportRepository.findById(params.id);
      response.status(HttpStatus.OK).send(reports);
    } catch (error) {
      console.error('Error fetching report:', error);
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'Failed to fetch report' });
    }
  }

  @Delete('/inventory/:id')
  public async deleteReport(@Param('id') id: string, @Res() response: Response) {
    try {
      const result = await this.reportRepository.delete(id);
      if (result) {
        response
          .status(HttpStatus.OK)
          .send({ message: `Report with ID ${id} deleted successfully` });
      } else {
        response
          .status(HttpStatus.NOT_FOUND)
          .send({ message: `Report with ID ${id} not found` });
      }
    } catch (error) {
      console.error('Error deleting report:', error);
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'Failed to delete report' });
    }
  }

 

}
