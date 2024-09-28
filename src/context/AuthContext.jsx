
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import {users} from "../data"
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      const registeredUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (registeredUser) {
        setUser({ name: registeredUser.name, email: registeredUser.email });
        resolve();
      } else {
        reject('Invalid email or password');
      }
    });
  };

  const register = (name, email, password) => {
    return new Promise((resolve, reject) => {
      const userExists = users.find((u) => u.email === email);

      if (userExists) {
        reject('Email already registered');
      } else if (password.length >= 6) {
        users.push({ name, email, password }); // Save user in the array
        setUser({ name, email });
        resolve();
      } else {
        reject('Password must be at least 6 characters long');
      }
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Define prop types for AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
