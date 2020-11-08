import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
  });

  const setValues = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValues];
};
