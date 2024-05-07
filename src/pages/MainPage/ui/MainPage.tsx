import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page";

const MainPage = memo(() => {
    const { t } = useTranslation("main");

    return (
        <Page data-testid="MainPage">
            <h3>{t("Main page")}</h3>
        </Page>
    );
});

export default MainPage;
