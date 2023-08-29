import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { MemoryRouter } from "react-router-dom";
import { IStateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReducersMapObject } from "@reduxjs/toolkit";

export interface IComponentRender {
    route?: string;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export function componentRender(component: ReactNode, options: IComponentRender = {}) {
    const {
        route = "/",
        initialState,
        asyncReducers,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
