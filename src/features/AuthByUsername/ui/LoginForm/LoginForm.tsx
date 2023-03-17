import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: ILoginFormProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input placeholder={t('User name')} autoFocus />
            <Input placeholder={t('Password')} />
            <Button
                className={classNames(cls.loginBtn, {}, [])}
            >
                {t('Log in')}
            </Button>
        </div>
    );
};
