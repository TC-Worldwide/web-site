import React, { createContext, useState, useContext } from "react";
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isBiometricEnabled, setIsBiometricEnabled] = useState(false); // New state for biometric authentication

  const login = (userData) => {
    setUser(userData);
    setRole(userData.role); // Assuming userData contains role
    setIs2FAEnabled(userData.is2FAEnabled); // Assuming userData contains 2FA status
    setIsBiometricEnabled(userData.isBiometricEnabled); // Assuming userData contains biometric status
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    setIs2FAEnabled(false);
    setIsBiometricEnabled(false); // Reset biometric status on logout
  };

  return (
    <AuthContext.Provider
      value={{ user, role, is2FAEnabled, isBiometricEnabled, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
