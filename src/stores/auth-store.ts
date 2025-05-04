import {create} from "zustand/react";
import {persist} from "zustand/middleware";
import {IAuthState} from "../types/auth";

const initialState: IAuthState = {
    token: "",
    isAuthenticated: false
}

export const useAuthStore = create<IAuthState>()(
    persist(
        (set) => ({
            ...initialState,
            token: "",
            isAuthenticated: false,
            setToken: (token: string) => set({token}),
            setIsAuthenticated: (isAuthenticated: boolean) => set({isAuthenticated}),
        }),
        {
            name: "auth-storage",
        }
    )
);