export {
    userReducer,
    userActions,
} from "./model/slice/userSlice";
export type { IUser, IUserSchema } from "./model/types/user";
export { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";
export { getUserInitialized } from "./model/selectors/getUserInitialized/getUserInitialized";

export { isUserAdmin, isUserManager, getUserRoles } from "./model/selectors/roleSelectors";
export { UserRole } from "./model/consts/consts";
