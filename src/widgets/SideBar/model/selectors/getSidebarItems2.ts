import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticleIcon from "shared/assets/icons/article.svg";
import { ISidebarItem } from "../types/sidebar";

export const getSidebarItems2 = createSelector(
    getUserAuthData,
    (userData) => {
        const sideBarItemsList: ISidebarItem[] = [
            {
                path: RoutePath.main,
                text: "Main page",
                Icon: MainIcon,
            },
            {
                path: RoutePath.about,
                text: "About us",
                Icon: AboutIcon,
            },

        ];

        if (userData) {
            sideBarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: "Profile",
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: "Articles",
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sideBarItemsList;
    },
);
