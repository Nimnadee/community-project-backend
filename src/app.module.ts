import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Inventory, InventorySchema } from './model/schema/Inventory';
import { InventoryController } from './controller/Inventory.controller';
import { InventoryService } from './service/Inventory.service';
import { InventoryRepository } from './repository/Inventory.repository';
import { InventoryMapper } from './mapper/Inventory.mapper';


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
      {name: Inventory.name, schema: InventorySchema}
    ])

  ],
  controllers: [
       InventoryController
  ],
  providers: [
    InventoryService,
    InventoryRepository,
    InventoryMapper

  ],
})
export class AppModule {}
