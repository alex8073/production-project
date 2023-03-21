import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: ILoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onUsernameChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );
    const onPasswordChange = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );
    const onLoginClick = useCallback(
        () => {
            dispatch(loginByUsername({ username, password }));
        },
        [dispatch, password, username],
    );

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Login form')} />
            {error && <Text text={t('Incorrect login or password')} theme={TextTheme.ERROR} />}
            <Input
                placeholder={t('User name')}
                value={username}
                onChange={onUsernameChange}
                autoFocus
            />
            <Input
                placeholder={t('Password')}
                value={password}
                onChange={onPasswordChange}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                className={classNames(cls.loginBtn, {}, [])}
                disabled={isLoading}
            >
                {t('Log in')}
            </Button>
        </div>
    );
});
