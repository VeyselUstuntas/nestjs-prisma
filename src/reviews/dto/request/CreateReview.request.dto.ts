import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { DtoPrefix, getValidationMessage, ValidationType } from "src/_common/enums/ValidationMessages.enum"

export class CreateReviewRequestDto {

    @IsString({ message: getValidationMessage(DtoPrefix.TITLE, ValidationType.MUST_BE_STRING) })
    @IsNotEmpty({ message: getValidationMessage(DtoPrefix.TITLE, ValidationType.IS_NOT_EMPTY) })
    title: string;

    @IsString({ message: getValidationMessage(DtoPrefix.CONTENT, ValidationType.MUST_BE_STRING) })
    @IsNotEmpty({ message: getValidationMessage(DtoPrefix.CONTENT, ValidationType.IS_NOT_EMPTY) })
    content: string


    @IsNumber({}, { message: getValidationMessage(DtoPrefix.RATING, ValidationType.MUST_BE_NUMBER) })
    @IsNotEmpty({ message: getValidationMessage(DtoPrefix.RATING, ValidationType.IS_NOT_EMPTY) })
    rating: number


    @IsNumber({}, { message: getValidationMessage(DtoPrefix.PRODUCT_ID, ValidationType.MUST_BE_NUMBER) })
    @IsNotEmpty({ message: getValidationMessage(DtoPrefix.PRODUCT_ID, ValidationType.IS_NOT_EMPTY) })
    productId: number;


}