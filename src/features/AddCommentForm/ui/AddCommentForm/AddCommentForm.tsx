import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    DynamicModuleLoader,
    IReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { HStack } from "@/shared/ui/Stack";
import {
    addCommentFormActions,
    addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import { gatAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import cls from "./AddCommentForm.module.scss";

export interface IAddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const initialReducers: IReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: IAddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(gatAddCommentFormText);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || "");
        onCommentTextChange("");
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <HStack
                max
                gap="16"
                className={classNames(cls.AddCommentForm, {}, [className])}
                data-testid="AddCommentForm"
            >
                <Input
                    placeholder={t("Enter comment text")}
                    value={text}
                    onChange={onCommentTextChange}
                    className={cls.input}
                    data-testid="AddCommentForm.Input"
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                    data-testid="AddCommentForm.Button"
                >
                    {t("Send")}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
