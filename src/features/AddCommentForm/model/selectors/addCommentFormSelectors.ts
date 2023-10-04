import { IStateSchema } from "@/app/providers/StoreProvider";

export const gatAddCommentFormText = (state: IStateSchema) => state?.addCommentForm?.text ?? "";
export const getAddCommentFormError = (state: IStateSchema) => state?.addCommentForm?.error;
