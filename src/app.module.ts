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
import { Product, ProductSchema } from './model/schema/product';
import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';
import {ProductRepository} from "./repository/product.Repository";
import {ProductMapper} from "./mapper/product.mapper";




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
      {name:Product.name,schema:ProductSchema}
    ])

  ],
  controllers: [
       InventoryController,
      OrderController,
      ProductController
  ],
  providers: [
      InventoryService,
      InventoryRepository,
      InventoryMapper,
      OrderService,
      OrderRepository,
      OrderMapper,
      ProductService,
      ProductRepository,
      ProductMapper

  ],
})
export class AppModule {}
