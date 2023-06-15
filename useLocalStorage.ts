import { useEffect } from "preact/hooks";

export default function useLocalStorage<T>(key: string) {
    const get = ()=>window.localStorage.getItem(key);
    const set = (value:T)=>{
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [get,set] as const;
}