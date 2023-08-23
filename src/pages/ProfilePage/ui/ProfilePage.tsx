import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Page } from "widgets/Page/ui/Page";
import { EditableProfileCard } from "features/EditableProfileCard";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

interface IProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: IProfilePageProps) => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation("profile");

    if (!id) {
        return <Text text={t("Profile not found")} />;
    }

    return (
        <Page className={classNames("", {}, [className])}>
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;
