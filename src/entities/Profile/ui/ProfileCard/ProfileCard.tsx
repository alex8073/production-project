import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';
import { getProfileError } from '../../selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../selectors/getProfileLoading/getProfileLoading';

interface IProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: IProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstName}
                    placeholder={t('Name')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Surname')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
