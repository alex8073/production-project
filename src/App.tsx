import "./styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import React, {Suspense} from "react";
import {useTheme} from "./theme/useTheme";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={"/"}>MainPage</Link>
            <Link to={"/about"}>AboutPage</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;

