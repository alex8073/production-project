import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navnar } from "widgets/Navbar";
import { Sidenar } from "widgets/Sidebar";
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
                <Navnar />
                <div className="content-page">
                    <Sidenar />
                    {initialized && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
