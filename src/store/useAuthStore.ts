import {create} from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    isAuthenticate: boolean;
    user: string | null;
    login: (userName: string) => void;
    logout: () => void;
    
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            isAuthenticate: false,
            user: null,
            login: (userName) => set({ 
                isAuthenticate: true, 
                user: userName }),
            logout: () => set({ 
                isAuthenticate: false, 
                user: null }),
        }),
        
        {name: 'auth-store'}
    ))
    
