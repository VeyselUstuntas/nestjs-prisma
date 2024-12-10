import { Inject, Injectable } from '@nestjs/common';
import { Review } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateReviewRequestDto } from './dto/request/CreateReview.request.dto';

@Injectable()
export class ReviewsService {

    constructor(@Inject() private readonly databaseService: DatabaseService) { }

    async create(data: CreateReviewRequestDto): Promise<Review> {
        const newReview = await this.databaseService.review.create({
            data: data,
            include: { product: true }
        });
        return newReview;
    }

    async findAll(): Promise<Review[]> {
        const reviews = await this.databaseService.review.findMany({ include: { product: true } });
        return reviews;
    }

    async findOne(productId: number): Promise<Review[]> {
        const reviews = await this.databaseService.review.findMany({ where: { productId: productId }, include: { product: true } });
        return reviews;
    }

    async update(id: number, data: CreateReviewRequestDto): Promise<Review> {
        const updatedReview = await this.databaseService.review.update({ where: { id: id }, data: data, include: { product: true } });
        return updatedReview;
    }

    async delete(id: number): Promise<Review> {
        const deletedReview = await this.databaseService.review.delete({ where: { id: id }, include: { product: true } });
        return deletedReview;
    }

}
