import { Description } from "@prisma/client";
import { Availibility } from "../enums/Availibility.enum";
import { Review } from "./Review.response";
import { Tag } from "./Tag.response";

export class ProductBaseReponse {
    id: number;
    name: string;
    price: number;
    sale: boolean;
    availibility: Availibility;
    description?: Description;
    tags?: Tag[];
    reviews?: Review[];
}