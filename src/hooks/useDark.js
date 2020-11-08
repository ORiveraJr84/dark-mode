import { useLocalStorage } from "./useLocalStorage";

export const useDark = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  return [value, setValue];
};
