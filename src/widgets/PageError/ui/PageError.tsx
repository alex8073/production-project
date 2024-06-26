import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import cls from "./PageError.module.scss";

interface IPageErrorProps {
    className?: string;
}

export const PageError = memo(({ className }: IPageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t("An unexpected error has occurred")}</p>
            <Button onClick={reloadPage}>{t("Refresh the page")}</Button>
        </div>
    );
});
