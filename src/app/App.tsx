import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navnar";
import { Sidebar } from "widgets/Sidenar";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInitialized, userActions } from "entities/User";

function App() {
    const dispatch = useDispatch();
    const initialized = useSelector(getUserInitialized);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {initialized && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
