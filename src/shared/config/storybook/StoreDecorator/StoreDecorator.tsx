import { Story } from "@storybook/react";
import { IStateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { IReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { addCommentFormReducer } from "features/AddCommentForm/model/slices/addCommentFormSlice";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/slice";
import { profileReducer } from "features/EditableProfileCard/model/slice/profileSlice";

const defaultAsyncReducers: IReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
