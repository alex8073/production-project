import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { getUserAuthData, getUserRoles, UserRole } from "@/entities/User";

import { getRouteForbidden, getRouteMain } from "@/shared/const/router";

interface IRequireAuthProps {
    children: JSX.Element;
    roles?: UserRole[];
}

export function RequireAuth(props: IRequireAuthProps) {
    const { children, roles } = props;
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const useRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((role) => useRoles?.includes(role));
    }, [roles, useRoles]);

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }

    return children;
}
