import { RouteProps } from "react-router-dom";
import { UserRole } from "@/entities/User";

export type IAppRouteProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
