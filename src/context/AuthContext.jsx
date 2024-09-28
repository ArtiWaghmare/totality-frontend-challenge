
import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { users } from "../data";
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user data from local storage if available
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      const registeredUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (registeredUser) {
        const userData = { name: registeredUser.name, email: registeredUser.email };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData)); // Store user data in local storage
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
        const newUser = { name, email, password };
        users.push(newUser); // Save user in the array
        setUser({ name, email });
        localStorage.setItem('user', JSON.stringify({ name, email })); // Store user data in local storage
        resolve();
      } else {
        reject('Password must be at least 6 characters long');
      }
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user data from local storage on logout
  };

  // Optional: Cleanup on component unmount
  useEffect(() => {
    return () => {
      // Any cleanup if necessary
    };
  }, []);

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
