import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './NavBar.module.scss';

interface INavBarProps {
  className?: string;
}

export const NavBar: FC<INavBarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback(() => setIsAuthModal((prev) => !prev), []);

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
                {t('Log in')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A, animi aspernatur assumenda cum eligendi esse hic incidunt
                inventore itaque laboriosam mollitia neque nisi quasi quia repellendus
                similique, velit. Animi architecto earum excepturi in nemo optio
                praesentium totam voluptate? Ab ad dignissimos expedita laborum
                molestiae neque nesciunt nihil sed totam voluptate. Ab aliquid
                debitis doloremque, error impedit in ipsum laborum, perspiciatis
                provident quibusdam, rerum sunt temporibus? Adipisci, dolor provident
                quam quibusdam rem rerum. Ab accusantium aspernatur consectetur
                dignissimos exercitationem laboriosam maxime minima nihil nostrum
                numquam obcaecati odit perspiciatis, praesentium quae quis quo,
                repellat soluta sunt? In necessitatibus porro sapiente sit voluptate!
            </Modal>

        </div>
    );
};
