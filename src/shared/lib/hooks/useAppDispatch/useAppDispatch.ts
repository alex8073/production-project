import { useDispatch } from "react-redux";
import { IAppDispatch } from "@/app/providers/StoreProvider";

export const useAppDispatch = () => useDispatch<IAppDispatch>();
