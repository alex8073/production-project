import { RouteProps } from "react-router-dom";
// eslint-disable-next-line path-checker-fsd-stable/layer-imports
import { UserRole } from "@/entities/User";

export type IAppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
