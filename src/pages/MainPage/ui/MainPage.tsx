import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <h3>{t('Main page')}</h3>
        </div>
    );
};

export default MainPage;
