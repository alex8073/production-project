import { classNames, IMods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss';
import { IProfile } from '../../types/profile';

interface IProfileCardProps {
    className?: string;
    data?: IProfile;
    isLoading?: boolean;
    readOnly?: boolean;
    error?: string;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
}

export const ProfileCard = (props: IProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        readOnly,
        error,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [cls.loading, className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, { }, [cls.error, className])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Profile loading error')}
                    text={t('Try to reload page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: IMods = {
        [cls.editing]: !readOnly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar
                && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data?.avatar} alt="" />
                    </div>
                )}
                <Input
                    value={data?.firstName}
                    placeholder={t('Name')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Surname')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readOnly={readOnly}
                    onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
                            e.preventDefault();
                        }
                    }}
                />
                <Input
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('Username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readOnly={readOnly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readOnly={readOnly}
                />
            </div>
        </div>
    );
};
