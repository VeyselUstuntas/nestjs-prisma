import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Availibility } from "src/_common/enum/Availibility.enum";

export class CreateProductDto {

    @IsString({message:"Must be String"})
    @IsNotEmpty()
    name: string;


    @IsNumber({},{message:"Must be Number"})
    @IsNotEmpty()
    price:number;

    @IsEnum(Availibility,{message:"Must be Enum"})
    @IsNotEmpty()
    availibility:Availibility;

}
