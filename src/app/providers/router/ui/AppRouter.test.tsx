import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { componentRender } from "@/shared/lib/tests/componentRender/componentsRender";
import AppRouter from "./AppRouter";
import { getRouteAbout, getRouteProfile, getRouteAdmin } from "@/shared/const/router";
import { UserRole } from "@/entities/User";

describe("app/router/AppRouter", () => {
    test("Страница должна отрендериться", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        // timeout добавлен так как импортируем компонент с таймаутом для имитации работы сервера
        await waitForElementToBeRemoved(screen.queryByTestId("Spinner"), { timeout: 2000 }).catch((error) => console.log(error));

        const page = await screen.findByTestId("AboutPage");
        expect(page).toBeInTheDocument();
    });

    test("Страница не найдена", async () => {
        componentRender(<AppRouter />, {
            route: "/asfasfasfasf",
        });

        const page = await screen.findByTestId("NotFoundPage");
        expect(page).toBeInTheDocument();
    });

    test("Редирект неавторизованного пользователя на главную", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1"),
        });

        const page = await screen.findByTestId("MainPage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ к закрытой странице для авторизованного пользователя", async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile("1"),
            initialState: {
                user: { _initialized: true, authData: {} },
            },
        });

        const page = await screen.findByTestId("ProfilePage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ запрещен (отсутствует роль)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _initialized: true, authData: {} },
            },
        });

        // timeout добавлен так как импортируем компонент с таймаутом для имитации работы сервера
        await waitForElementToBeRemoved(screen.queryByTestId("Spinner"), { timeout: 2000 }).catch((error) => console.log(error));

        const page = await screen.findByTestId("ForbiddenPage");
        expect(page).toBeInTheDocument();
    });

    test("Доступ разрешен (присутствует роль)", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _initialized: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId("AdminPanelPage");
        expect(page).toBeInTheDocument();
    });
});
