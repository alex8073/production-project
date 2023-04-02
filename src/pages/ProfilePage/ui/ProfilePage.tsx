import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DynamicModuleLoader, IReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface IProfilePageProps {
    className?: string;
}

const initialReducers: IReducersList = { profile: profileReducer };

const ProfilePage = memo(({ className }: IProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Profile Page')}
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
