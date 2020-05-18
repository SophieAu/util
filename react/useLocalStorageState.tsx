// taken from Kent C. Dodds' Beginner's Guide to React (https://egghead.io/lessons/react-create-reusable-custom-hooks)

import { useEffect, useState } from "react";

export const useLocalStorageState = (key: string, defaultValue = "") => {
  const [state, setState] = useState(
    () => window?.localStorage.getItem(key) || defaultValue
  );

  useEffect(() => {
    window?.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
