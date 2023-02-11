import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { useTheme } from "app/provider/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={"/"}>MainPage</Link>
      <Link to={"/about"}>AboutPage</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/about"} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
