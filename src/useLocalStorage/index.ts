import { useState, useEffect } from "react";

type Props<T> = {
  key: string;
  initialValue?: T;
};

const useLocalStorage = <T>({
  key,
  initialValue,
}: Props<T>): [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
] => {
  const [value, setValue] = useState<T | undefined>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(`Error parsing localStorage item for key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage item for key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
