'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize as not authenticated every time
  useEffect(() => {
    // Always start as not authenticated
    setIsAuthenticated(false);
    setIsLoading(false);
  }, []);

  // Login function with hardcoded credentials
  const login = (username, password) => {
    // Hardcoded credentials
    const validUsername = 'clever-otter-9283';
    const validPassword = 'G7u!xZ@2pL#qM9vB';

    if (username === validUsername && password === validPassword) {
      // Don't store in localStorage to require auth every time
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
