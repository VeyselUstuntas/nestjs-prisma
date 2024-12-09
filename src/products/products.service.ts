import { Inject, Injectable } from '@nestjs/common';
import { CreateProductRequestDto } from './dto/Request/CreateProduct.request.dto';
import { DatabaseService } from 'src/database/database.service';
import { ProductResponse } from './dto/Response/Product.response.dto';
import { ProductBaseReponse } from 'src/_common/response/Product.response';
import { Availibility } from 'src/_common/enums/Availibility.enum';
import { Prisma, Product } from '@prisma/client';
import { UpdateProductRequestDto } from './dto/Request/UpdateProduct.request.dto';

@Injectable()
export class ProductsService {

  constructor(@Inject() private readonly databaseService: DatabaseService) { }

  async create(createProductDto: CreateProductRequestDto): Promise<Product> {
    const product: Product | null = await this.databaseService.product.create({ data: createProductDto });
    return product;
  }

  async findAll(): Promise<Product[]> {
    const products: Product[] | null = await this.databaseService.product.findMany();
    return products;
  }

  async findOne(id: number): Promise<Product> {
    const product: Product | null = await this.databaseService.product.findUnique({ where: { id: id } });
    return product;
  }

  async update(id: number, data: UpdateProductRequestDto): Promise<Product> {
    const updatedProduct: Product = await this.databaseService.product.update({ where: { id: id }, data: data });
    return updatedProduct;
  }

  async remove(id: number): Promise<Product> {
    const deletedProduct = await this.databaseService.product.delete({ where: { id: id } });
    return deletedProduct;
  }
}
