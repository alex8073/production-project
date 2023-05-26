import { IStateSchema } from "app/providers/StoreProvider";
import { ArticleListView } from "entities/Article";

export const getArticlePageIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading || false;
export const getArticlePageError = (state: IStateSchema) => state.articlesPage?.error;
export const getArticlePageView = (state: IStateSchema) => state.articlesPage?.view || ArticleListView.TILE;
