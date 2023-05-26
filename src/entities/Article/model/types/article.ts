import { IUser } from "entities/User";

export enum ArticleBlockType {
    CODE = "CODE",
    IMAGE = "IMAGE",
    TEXT = "TEXT",
}

export interface IArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface IArticleBlockCode extends IArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string;
}

export interface IArticleBlockImage extends IArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface IArticleBlockText extends IArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type IArticleBlock = IArticleBlockCode | IArticleBlockImage | IArticleBlockText;

export enum ArticleType {
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMICS = "ECONOMICS",
}
export enum ArticleListView {
    LIST = "LIST",
    TILE = "TILE",
}

export interface IArticle {
    id: string;
    title: string;
    user: IUser;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: IArticleBlock[];
}
