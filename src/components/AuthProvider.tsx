import React, { createContext, useState, useContext, ReactNode } from "react";

interface User {
  role: string;
  is2FAEnabled: boolean;
  isBiometricEnabled: boolean;
  // Add other user properties as needed
}

interface AuthContextProps {
  user: User | null;
  role: string | null;
  is2FAEnabled: boolean;
  isBiometricEnabled: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);

  const login = (userData: User) => {
    setUser(userData);
    setRole(userData.role);
    setIs2FAEnabled(userData.is2FAEnabled);
    setIsBiometricEnabled(userData.isBiometricEnabled);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    setIs2FAEnabled(false);
    setIsBiometricEnabled(false);
  };

  return (
    <AuthContext.Provider value={{ user, role, is2FAEnabled, isBiometricEnabled, login, logout }}>
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
