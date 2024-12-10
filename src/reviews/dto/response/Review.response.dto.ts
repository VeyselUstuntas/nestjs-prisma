import { BaseResponse } from "src/_base/response/Base.response";
import { ReviewBaseResponse } from "src/_common/response/review/ReviewBase.response";

export class ReviewResponse {
    review: ReviewBaseResponse | ReviewBaseResponse[];
}

export class ReviewResponseDto extends BaseResponse<ReviewResponse> {
    data: ReviewResponse;
    message: string;
    success: boolean;
}