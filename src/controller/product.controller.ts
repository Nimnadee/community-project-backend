import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutRequestDto } from 'src/model/dto/request/product';
import { ProductService } from 'src/service/product.service';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/:id')
  public async findById(@Param('id') id: string) {
    return await this.productService.findById(id);
  }

  @Get()
  public async findAll() {
    return await this.productService.findAll();
  }

  @Post()
  public async create(@Body() produtRequestDto: ProdutRequestDto) {
    try {
      return await this.productService.create(produtRequestDto);
    } catch (error) {
      new InternalServerErrorException();
    }
  }

  @Put('/:id')
  public async update(
    @Param('id') id: string,
    @Body() produtRequestDto: ProdutRequestDto,
  ) {
    return await this.productService.update(id, produtRequestDto);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: string) {
    return await this.productService.delete(id);
  }
}
