import "./styles/index.scss";
import { useTheme } from "app/provider/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/provider/router";
import { NavBar } from "widgets/NavBar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
