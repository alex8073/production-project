import { memo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page";
import { EditableProfileCard } from "@/features/EditableProfileCard";
import { Text } from "@/shared/ui/Text";

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
        <Page className={classNames("", {}, [className])} data-testid="ProfilePage">
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;
