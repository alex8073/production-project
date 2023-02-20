import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/provider/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <h3>{t('Main page')}</h3>
            <BugButton />
        </div>
    );
};

export default MainPage;
