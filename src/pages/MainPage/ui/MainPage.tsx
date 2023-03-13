import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <h3>{t('Main page')}</h3>
            <Counter />
        </div>
    );
};

export default MainPage;
