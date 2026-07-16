import React, { createContext, useState, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const fakeUser: User = {
  id: '1',
  nom: 'Diop',
  prenom: 'Admin',
  email: 'admin@pharmalink.sn',
  role: 'admin',
};

const MOT_DE_PASSE_VALIDE = 'PHARMA26';

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    if (password !== MOT_DE_PASSE_VALIDE) {
      throw new Error('Mot de passe incorrect.');
    }
    setUser({ ...fakeUser, email });
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...data } : prev));
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};