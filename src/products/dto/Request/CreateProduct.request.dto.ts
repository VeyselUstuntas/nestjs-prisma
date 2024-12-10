import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsNotEmptyObject, IsNumber, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { Availibility } from "src/_common/enums/Availibility.enum";
import { DtoPrefix, getValidationMessage, ValidationType } from "src/_common/enums/ValidationMessages.enum";
import { Description } from "src/_common/response/Description.response";
import { CreateDescriptionRequestDto } from "src/descriptions/dto/request/CreateDescription.request.dto";

export class CreateProductRequestDto {

    @MinLength(3, { message: getValidationMessage(DtoPrefix.NAME, ValidationType.MIN_LENGTH, 3) })
    @MaxLength(20, { message: getValidationMessage(DtoPrefix.NAME, ValidationType.MAX_LENGTH, 20) })
    @IsString({ message: getValidationMessage(DtoPrefix.NAME, ValidationType.MUST_BE_STRING) })
    @IsNotEmpty({ message: getValidationMessage(DtoPrefix.NAME, ValidationType.IS_NOT_EMPTY) })
    name: string;


    @IsNumber({}, { message: getValidationMessage(DtoPrefix.PRICE, ValidationType.MUST_BE_NUMBER) })
    @IsNotEmpty({ message: getValidationMessage(DtoPrefix.PRICE, ValidationType.IS_NOT_EMPTY) })
    price: number;

    @IsEnum(Availibility, { message: getValidationMessage(DtoPrefix.AVAILIBILITY, ValidationType.MUST_BE_ENUM) })
    @IsNotEmpty({ message: getValidationMessage(DtoPrefix.AVAILIBILITY, ValidationType.IS_NOT_EMPTY) })
    availibility: Availibility;



    @IsNotEmptyObject({ }, { message: getValidationMessage(DtoPrefix.DESCRIPTION, ValidationType.IS_NOT_EMPTY) })
    @Type(() => CreateDescriptionRequestDto)
    @ValidateNested()
    description: CreateDescriptionRequestDto;

}
