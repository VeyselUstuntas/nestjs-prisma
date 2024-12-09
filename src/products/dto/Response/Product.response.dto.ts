import { BaseResponse } from "src/_base/response/Base.response";
import { ProductBaseReponse } from "src/_common/response/Product.response";

export class ProductResponse {
    product: ProductBaseReponse | ProductBaseReponse[];
}


export class ProductResponseDto extends BaseResponse<ProductResponse> {
    data: ProductResponse;
    message: string;
    success: boolean;
}