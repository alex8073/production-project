import { useTranslation } from "react-i18next";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page";
import cls from "./NotFoundPage.module.scss";

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(({ className }: INotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])} data-testid="NotFoundPage">
            {t("Page not found")}
        </Page>

    );
});
