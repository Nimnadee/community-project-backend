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
import {OwnerController} from "./controller/Owner.controller";
import {OwnerService} from "./service/Owner.service";
import {OwnerRepository} from "./repository/Owner.repository";
import {OwnerMapper} from "./mapper/Owner.mapper";
import {Owner, OwnerSchema} from "./model/schema/Owner";


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
      {name:Owner.name,schema:OwnerSchema}
    ])

  ],
  controllers: [
       InventoryController,
      OrderController,
      OwnerController
  ],
  providers: [
    InventoryService,
    InventoryRepository,
    InventoryMapper,
      OrderService,
      OrderRepository,
      OrderMapper,
      OwnerService,
      OwnerRepository,
      OwnerMapper

  ],
})
export class AppModule {}
