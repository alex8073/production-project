import { FC, lazy } from "react";
import { IAddCommentFormProps } from "features/AddCommentForm/ui/AddCommentForm/AddCommentForm";

export const AddCommentFormAsync = lazy<FC<IAddCommentFormProps>>(() => import("./AddCommentForm"));
