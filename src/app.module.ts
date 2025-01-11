import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Inventory, InventorySchema } from './model/schema/Inventory';
import { InventoryController } from './controller/Inventory.controller';
import { InventoryService } from './service/Inventory.service';
import { InventoryRepository } from './repository/Inventory.repository';
import { InventoryMapper } from './mapper/Inventory.mapper';
import {OrderController} from "./controller/order.controller";
import {OrderService} from "./service/order.sevice";
import {OrderRepository} from "./repository/order.repository";
import {OrderMapper} from "./mapper/order.mapper";
import {Order, OrderSchema} from "./model/schema/order";
import { ExpensesService } from './service/Expenses.service';
import { ExpensesMapper } from './mapper/Expenses.mapper';
import { ExpensesRepository } from './repository/Expenses.repository';
import { ExpensesController } from './controller/expenses.controller';
import { Expenses, ExpensesSchema } from './model/schema/Expenses';


@Module({
  imports: [

    ConfigModule.forRoot(
      {
        envFilePath:'.env',
        isGlobal:true
      }
    ),

    MongooseModule.forRoot(process.env.MONGO_HOST,{
      dbName: process.env.MONGO_DATABASE_NAME
    }),

    MongooseModule.forFeature([
      {name: Inventory.name, schema: InventorySchema},
      {name:Order.name,schema:OrderSchema},
      {name:Expenses.name,schema:ExpensesSchema},

    ])

  ],
  controllers: [
      InventoryController,
      OrderController,
      ExpensesController
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
      OrderMapper

  ],
})
export class AppModule {}
