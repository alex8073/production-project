// <Адрес страницы, позиция скролла>
export type IScrollSaver = Record<string, number>

export interface IScrollSaverSchema {
    scroll: IScrollSaver;
}
