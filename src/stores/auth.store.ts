import { create } from "zustand";

type User = {
  id: string;
  name: string;
};

type AuthState = {
  user: User | null;
  isLoading: boolean;

  initializeAuth: () => Promise<void>;
  login: (user: User) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  isLoading: true,

  initializeAuth: async () => {
    // TODO:
    // Get token/session from AsyncStorage/SecureStore
    // Validate session

    set({
      user: null,
      isLoading: false,
    });
  },

  login: (user) => {
    set({
      user,
    });
  },

  logout: () => {
    set({
      user: null,
    });
  },
}));
