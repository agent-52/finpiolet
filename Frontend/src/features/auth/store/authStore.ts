import { create } from "zustand";
import type {User, UserDetails} from "../auth.types"


interface AuthState {
    user: UserDetails | null;

    isAuthenticated: boolean;

    isCheckingAuth: boolean;

    setUser: (user: UserDetails | null) => void;

    login: (user:UserDetails) => void;

    startChecking: () => void;
    stopChecking:() => void;

    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user:null,
    isCheckingAuth:false,
    isAuthenticated: false,

    setUser: (user) =>
        set({
            user,
            isAuthenticated: true,
        }),
    
    login: (user) => 
        set({
            user,
            isAuthenticated:true,

        }),
    
    startChecking: () => 
        set({
            isCheckingAuth:true,
        }),
    stopChecking: () => 
        set({
            isCheckingAuth:false
        }),

    logout: () =>
        set({
            user: null,
            isAuthenticated: false,
        }),
}));