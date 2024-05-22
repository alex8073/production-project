import { Story } from "@storybook/react";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { IStateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { IReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { loginReducer } from "@/features/AuthByUsername/testing";
import { articleDetailsReducer } from "@/entities/Article/testing";
import { addCommentFormReducer } from "@/features/AddCommentForm/testing";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/testing";
import { profileReducer } from "@/features/EditableProfileCard/testing";

const defaultAsyncReducers: IReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
    (
        state: DeepPartial<IStateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>,
    ) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
