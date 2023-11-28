import { rtkApi } from "@/shared/api/rtkApi";
import { IRating } from "@/entities/Rating";

interface IGetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface IRateArticleArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<IRating[], IGetArticleRatingArg>({
            query: ({ userId, articleId }) => ({
                url: "/article-ratings",
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, IRateArticleArg>({
            query: (args) => ({
                url: "/article-ratings",
                method: "POST",
                body: args,
            }),
        }),
    }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
