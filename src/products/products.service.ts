import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {

  constructor(@Inject() private readonly databaseService : DatabaseService){}
  
  async create(createProductDto: CreateProductDto) {
    const product = this.databaseService.product.create({data:createProductDto});
    return product;
  }

  findAll() {
    return null;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
