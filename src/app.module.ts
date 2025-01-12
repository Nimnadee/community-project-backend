import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Inventory, InventorySchema } from './model/schema/Inventory';
import { InventoryController } from './controller/Inventory.controller';
import { InventoryService } from './service/Inventory.service';
import { InventoryRepository } from './repository/Inventory.repository';
import { InventoryMapper } from './mapper/Inventory.mapper';
import {OrderController} from "./controller/order.controller";
import {OrderService} from "./service/order.service";
import {OrderRepository} from "./repository/order.repository";
import {OrderMapper} from "./mapper/order.mapper";
import {Order, OrderSchema} from "./model/schema/order";
import { ExpensesService } from './service/Expenses.service';
import { ExpensesMapper } from './mapper/Expenses.mapper';
import { ExpensesRepository } from './repository/Expenses.repository';
import { ExpensesController } from './controller/expenses.controller';
import { Expenses, ExpensesSchema } from './model/schema/Expenses';
import { Product, ProductSchema } from './model/schema/product';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';
import {ProductRepository} from "./repository/product.Repository";
import {ProductMapper} from "./mapper/product.mapper";
import {OwnerController} from "./controller/Owner.controller";
import {OwnerService} from "./service/Owner.service";
import {OwnerRepository} from "./repository/Owner.repository";
import {OwnerMapper} from "./mapper/Owner.mapper";
import {Owner, OwnerSchema} from "./model/schema/Owner";
import {Report, ReportSchema } from './model/schema/Report';
import { ReportController } from './controller/report.controller';
import { ReportRepository } from './repository/report.repository';

@Module({
  imports: [

    ConfigModule.forRoot(
      {
        envFilePath:'.env',
        isGlobal:true
      }
    ),

    MongooseModule.forRoot(process.env.MONGO_HOST, {
      dbName: process.env.MONGO_DATABASE_NAME,
    }),
    

    MongooseModule.forFeature([
      {name: Inventory.name, schema: InventorySchema},
      {name:Order.name,schema:OrderSchema},
      {name:Expenses.name,schema:ExpensesSchema},
      {name:Product.name,schema:ProductSchema},
      {name:Owner.name,schema:OwnerSchema},
      {name:Report.name,schema:ReportSchema}
    ])

  ],
  controllers: [
      InventoryController,
      ReportController,
      InventoryController,
      OrderController,
      ExpensesController,
      ProductController,
      OwnerController
  ],
  providers: [
      ExpensesService,
      ExpensesMapper,
      ExpensesRepository,
          InventoryService,
          InventoryRepository,
          InventoryMapper,
      OrderService,
      OrderRepository,
      OrderMapper,
      ProductService,
      ProductRepository,
      ProductMapper,
      OwnerService,
      OwnerRepository,
      OwnerMapper,
      ReportRepository

  ],
   
})
export class AppModule {}
