import { useEffect, useState } from "preact/hooks";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  if (Deno.env.get("DENO_DEPLOYMENT_ID") !== undefined) {
    return [initialValue, (_: T) => {}] as const;
  }
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue === null) return initialValue;
    return JSON.parse(jsonValue) as T;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue] as const;
}
