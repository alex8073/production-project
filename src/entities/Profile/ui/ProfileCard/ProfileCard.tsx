import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
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

    return (
        <div className={classNames(cls.ProfileCard, { }, [className])}>
            <div className={cls.data}>
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
            </div>
        </div>
    );
};
