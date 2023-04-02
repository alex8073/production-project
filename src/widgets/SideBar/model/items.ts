import { VFC, SVGProps } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface ISidebarItem {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGSVGElement>>
}

export const SideBarItemsList: ISidebarItem[] = [
    {
        path: RoutePath.main,
        text: 'Main page',
        Icon: MainIcon,

    },
    {
        path: RoutePath.about,
        text: 'About us',
        Icon: AboutIcon,

    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: ProfileIcon,

    },
];
