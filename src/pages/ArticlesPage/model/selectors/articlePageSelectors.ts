import { IStateSchema } from "app/providers/StoreProvider";
import { ArticleListView } from "entities/Article";

export const getArticlePageIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageError = (state: IStateSchema) => state.articlesPage?.error;
export const getArticlePageView = (state: IStateSchema) => state.articlesPage?.view || ArticleListView.TILE;
export const getArticlePageNum = (state: IStateSchema) => state.articlesPage?.page || 1;
export const getArticlePageLimit = (state: IStateSchema) => state.articlesPage?.limit || 9;
export const getArticlePageHasMore = (state: IStateSchema) => state.articlesPage?.hasMore;
