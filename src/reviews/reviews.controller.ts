import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Res } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Response } from 'express';
import { CreateReviewRequestDto } from './dto/request/CreateReview.request.dto';
import { ReviewResponseDto } from './dto/response/Review.response.dto';
import { BaseResponse } from 'src/_base/response/Base.response';
import { ResponseMessages } from 'src/_common/enums/ResponseMessages.enum';
import { ReviewBaseResponse } from 'src/_common/response/review/ReviewBase.response';

@Controller('reviews')
export class ReviewsController {

    constructor(@Inject() private readonly reviewsService: ReviewsService) { }

    @Post()
    async create(@Body() body: CreateReviewRequestDto, @Res() res: Response<ReviewResponseDto>): Promise<void> {
        const data: ReviewBaseResponse = await this.reviewsService.create(body);
        res.json(
            new BaseResponse(
                { review: data },
                ResponseMessages.SUCCESS,
                true
            ),
        );
    }

    @Get()
    async findAll(@Res() res: Response<ReviewResponseDto>): Promise<void> {
        const data: ReviewBaseResponse[] = await this.reviewsService.findAll();
        res.json(
            new BaseResponse(
                { review: data },
                ResponseMessages.SUCCESS,
                true
            )
        );
    }

    @Get(':id')
    async findOne(@Param('id') productId: number, @Res() res: Response<ReviewResponseDto>): Promise<void> {
        const data: ReviewBaseResponse[] = await this.reviewsService.findOne(Number(productId));
        res.json(
            new BaseResponse(
                { review: data },
                ResponseMessages.SUCCESS,
                true
            )
        );
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() body: CreateReviewRequestDto, @Res() res: Response<ReviewResponseDto>): Promise<void> {
        const data: ReviewBaseResponse = await this.reviewsService.update(Number(id), body);
        res.json(
            new BaseResponse(
                { review: data },
                ResponseMessages.SUCCESS,
                true
            )
        );
    }

    @Delete(':id')
    async delete(@Param('id') id: number, @Res() res: Response<ReviewResponseDto>): Promise<void> {
        const data: ReviewBaseResponse = await this.reviewsService.delete(Number(id));
        res.json(
            new BaseResponse(
                { review: data },
                ResponseMessages.SUCCESS,
                true
            )
        );
    }

}
