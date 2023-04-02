import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface IProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: IProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>
            {t('Profile Page')}
        </div>
    );
});

export default ProfilePage;
