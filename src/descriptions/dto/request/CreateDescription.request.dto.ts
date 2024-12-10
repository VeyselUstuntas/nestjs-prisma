import { IsNotEmpty, IsNotEmptyObject, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DtoPrefix, getValidationMessage, ValidationType } from "src/_common/enums/ValidationMessages.enum";

export class CreateDescriptionContentRequestDto {
    @MinLength(3, { message: getValidationMessage(DtoPrefix.CONTENT, ValidationType.MIN_LENGTH, 3) })
    @MaxLength(1000, { message: getValidationMessage(DtoPrefix.CONTENT, ValidationType.MAX_LENGTH, 1000) })
    @IsString({ message: getValidationMessage(DtoPrefix.CONTENT, ValidationType.MUST_BE_STRING) })
    @IsNotEmpty({ message: getValidationMessage(DtoPrefix.CONTENT, ValidationType.IS_NOT_EMPTY) })
    content: string;
}

export class CreateDescriptionRequestDto {
    @ValidateNested()
    @Type(() => CreateDescriptionContentRequestDto)
    @IsNotEmptyObject({}, { message: getValidationMessage(DtoPrefix.CREATE, ValidationType.IS_NOT_EMPTY) })
    create: CreateDescriptionContentRequestDto;
}
