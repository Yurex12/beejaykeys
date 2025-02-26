// AuthContext.tsx
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { isTokenExpired } from "../services/authutils";

type AuthContextType = {
  accessToken: string | null;
  userId: string | null;
  login: (token: string, userId: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(() =>
    localStorage.getItem("accessToken"),
  );
  const [userId, setUserId] = useState<string | null>(() =>
    localStorage.getItem("userId"),
  );

  useEffect(() => {
    // Check if token exists and is expired
    if (accessToken && isTokenExpired(accessToken)) {
      logout();
    }
  }, [accessToken]);

  const login = (token: string, id: string) => {
    setAccessToken(token);
    setUserId(id);
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userId", id);
  };

  const logout = () => {
    setAccessToken(null);
    setUserId(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    // Optionally, redirect to login page
  };

  return (
    <AuthContext.Provider value={{ accessToken, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
