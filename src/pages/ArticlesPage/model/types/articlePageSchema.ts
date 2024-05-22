import { EntityState } from "@reduxjs/toolkit";
import {
    ArticleListView,
    IArticle,
    ArticleSortField,
    ArticleType,
} from "@/entities/Article";
import { ISortOrder } from "@/shared/types/sort";

export interface IArticlePageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleListView;
    order: ISortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}
