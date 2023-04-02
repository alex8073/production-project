import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, IReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

export interface ILoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: IReducersList = { loginForm: loginReducer };

const LoginForm = memo(({ className, onSuccess }: ILoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        async () => {
            const result = await dispatch(loginByUsername({ username, password }));
            if (result.meta.requestStatus) {
                onSuccess();
            }
        },
        [dispatch, onSuccess, password, username],
    );

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
