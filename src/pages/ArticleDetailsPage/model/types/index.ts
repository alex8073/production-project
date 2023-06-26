import { IArticleDetailsCommentSchema } from "./articleDetailsCommentSchema";
import { IArticleDetailsRecommendationsSchema } from "./articleDetailsRecommendationsSchema";

export interface IArticleDetailsPageSchema {
    comments: IArticleDetailsCommentSchema;
    recommendations: IArticleDetailsRecommendationsSchema;
}
