import { Availibility } from "../enums/Availibility.enum";

export class ProductBaseReponse{
    id:number;
    name:string;
    price:number;
    sale:boolean;
    availibility:Availibility;
}