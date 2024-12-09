import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Inject, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductRequestDto } from './dto/Request/CreateProduct.request.dto';
import { Response } from 'express';
import { ProductResponse, ProductResponseDto } from './dto/Response/Product.response.dto';
import { BaseResponse } from 'src/_base/response/Base.response';
import { ResponseMessages } from 'src/_common/enums/ResponseMessages.enum';
import { Product } from '@prisma/client';
import { Availibility } from 'src/_common/enums/Availibility.enum';
import { UpdateProductRequestDto } from './dto/Request/UpdateProduct.request.dto';

@Controller('products')
export class ProductsController {
  constructor(@Inject() private readonly productsService: ProductsService) { }

  @Post()
  async create(@Body() createProductDto: CreateProductRequestDto, @Res() res: Response<ProductResponseDto>): Promise<void> {
    const data: Product = await this.productsService.create(createProductDto);
    res.json(
      new BaseResponse(
        {
          product: {
            id: data.id,
            name: data.name,
            price: data.price,
            sale: data.sale,
            availibility: data.availibility as Availibility
          }
        },
        ResponseMessages.SUCCESS,
        true
      )
    );
  }

  @Get()
  async findAll(@Res() res: Response<ProductResponseDto>): Promise<void> {
    const data: Product[] = await this.productsService.findAll();
    res.json(
      new BaseResponse(
        {
          product: data.map(prd => ({
            id: prd.id,
            name: prd.name,
            price: prd.price,
            sale: prd.sale,
            availibility: prd.availibility as Availibility
          }))
        },
        ResponseMessages.SUCCESS,
        true));

  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response<ProductResponseDto>): Promise<void> {
    const data: Product | null = await this.productsService.findOne(Number(id));
    res.json(
      new BaseResponse(
        {
          product: {
            id: data.id,
            name: data.name,
            price: data.price,
            sale: data.sale,
            availibility: data.availibility as Availibility
          }
        },
        ResponseMessages.SUCCESS,
        true
      )
    );
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductRequestDto, @Res() res: Response<ProductResponseDto>): Promise<void> {
    const updatedProduct: Product = await this.productsService.update(Number(id), updateProductDto);
    res.json(
      new BaseResponse(
        {
          product: {
            id: updatedProduct.id,
            name: updatedProduct.name,
            price: updatedProduct.price,
            sale: updatedProduct.sale,
            availibility: updatedProduct.availibility as Availibility
          }
        },
        ResponseMessages.SUCCESS,
        true
      )
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response<ProductResponseDto>): Promise<void> {
    const deletedProduct: Product = await this.productsService.remove(Number(id));
    res.json(
      new BaseResponse(
        {
          product: {
            id: deletedProduct.id,
            name: deletedProduct.name,
            price: deletedProduct.price,
            sale: deletedProduct.sale,
            availibility: deletedProduct.availibility as Availibility
          }
        },
        ResponseMessages.SUCCESS,
        true
      )
    );
  }
}
