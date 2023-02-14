import "./styles/index.scss";
import { useTheme } from "app/provider/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/provider/router";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div className={"content-page"}>
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
