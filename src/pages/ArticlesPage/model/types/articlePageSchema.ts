import { EntityState } from "@reduxjs/toolkit";
import { ArticleListView, IArticle } from "entities/Article";

export interface IArticlePageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;

    view: ArticleListView;
    page: number;
    limit?: number;
    hasMore: boolean;

    _inited: boolean;
}
