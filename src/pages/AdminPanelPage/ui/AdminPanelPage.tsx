import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page/ui/Page";

const AdminPanelPage = memo(() => {
    const { t } = useTranslation("admin-panel");

    return (
        <Page>
            {t("Admin panel")}
        </Page>
    );
});

export default AdminPanelPage;
