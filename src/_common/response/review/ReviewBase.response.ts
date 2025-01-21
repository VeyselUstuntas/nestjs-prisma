import { Product } from "@prisma/client";

export class ReviewBaseResponse {
    id: number
    title: string;
    content: string;
    rating: number;
    productId: number;
    product?: Product;
}