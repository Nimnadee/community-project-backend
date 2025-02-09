import { Controller, Delete, Get, HttpStatus, Param, Put, Res } from '@nestjs/common';
import { InventoryService } from 'src/service/Inventory.service';
import { Response } from 'express';
import { ReportRepository } from 'src/repository/report.repository';
import { ExpensesService } from 'src/service/Expenses.service';
import { ExpensesReportRepository } from 'src/repository/ExpensesReport.repository';
import { OrderService } from 'src/service/order.service';
import { OrderReportRepository } from 'src/repository/order.report.repository';

@Controller('reports')
export class ReportController {
  constructor(private readonly inventoryService: InventoryService,
              private readonly reportRepository: ReportRepository,
              private readonly expensesService: ExpensesService,
              private readonly expensesReportRepository: ExpensesReportRepository,
              private readonly orderService: OrderService,
              private readonly orderReportRepository:OrderReportRepository 
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
  @Get('/expenses/generate')
  public async generateExpensesReport(@Res() response: Response) {
    const report = await this.expensesService.generateExpensesReport();
    response.status(HttpStatus.OK).send(report);
  }

  @Get('/expenses')
  public async getAllExpensesReports(@Res() response: Response) {
    try {
      const reports = await this.expensesReportRepository.findAll();
      response.status(HttpStatus.OK).send(reports);
    } catch (error) {
      console.error('Error fetching reports:', error);
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'Failed to fetch reports' });
    }
  }
  @Get("/expenses/:id")
  public async getExpensesReportById(@Param() params:any, @Res() response: Response) {
    try {
      const reports = await this.expensesReportRepository.findById(params.id);
      response.status(HttpStatus.OK).send(reports);
    } catch (error) {
      console.error('Error fetching report:', error);
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'Failed to fetch report' });
    }
  }

  @Delete('/expenses/:id')
  public async deleteExpensesReport(@Param('id') id: string, @Res() response: Response) {
    try {
      const result = await this.expensesReportRepository.delete(id);
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
  @Get('/order/generate')
  public async generateOrderReport(@Res() response: Response) {
    const report = await this.orderService.generateOrderReport();
    response.status(HttpStatus.OK).send(report);
  }

  @Get('/order')
  public async getAllOrderReports(@Res() response: Response) {
    try {
      const reports = await this.orderReportRepository.findAll();
      response.status(HttpStatus.OK).send(reports);
    } catch (error) {
      console.error('Error fetching reports:', error);
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'Failed to fetch reports' });
    }
  }
  @Get("/order/:id")
  public async getOrderReportById(@Param() params:any, @Res() response: Response) {
    console.log("Received ID in params:", params.id); 
    try {
      const reports = await this.orderReportRepository.findById(params.id);
      response.status(HttpStatus.OK).send(reports);
    } catch (error) {
      console.error('Error fetching report:', error);
      response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'Failed to fetch report' });
    }
  }

  @Delete('/order/:id')
  public async deleteOrderReport(@Param('id') id: string, @Res() response: Response) {
    try {
      const result = await this.orderReportRepository.delete(id);
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
