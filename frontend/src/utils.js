import { useState, useEffect } from 'react';
import axios from 'axios';

// Local Storage Hook
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue, removeValue];
};

// API Configuration
const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const interviewAPI = {
  sendMessage: async (message) => {
    try {
      const response = await api.post('/api/interview', {
        message: message.trim(),
      });
      return response.data;
    } catch (error) {
      if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
        throw new Error('Unable to connect to AI Coach. Please make sure the backend server is running on http://localhost:8000');
      }
      if (error.response) {
        throw new Error(error.response.data?.detail || 'AI Coach is temporarily unavailable. Please try again.');
      }
      throw new Error('Network error. Please check your connection and try again.');
    }
  },
};