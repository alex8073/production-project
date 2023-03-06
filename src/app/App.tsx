import './styles/index.scss';
import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/provider/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import React, { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

function App() {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <button type="button" onClick={() => setIsOpen(true)}>toggle</button>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
