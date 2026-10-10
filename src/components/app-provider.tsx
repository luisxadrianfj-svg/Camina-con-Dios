'use client';
import { createContext, useContext, useState } from 'react';
type State = { large: boolean; setLarge: (value: boolean) => void; favorite: boolean; setFavorite: (value: boolean) => void; pace: string; setPace: (value: string) => void };
const Context = createContext<State | null>(null);
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [large, setLarge] = useState(false); const [favorite, setFavorite] = useState(false); const [pace, setPace] = useState('A mi ritmo');
  return <Context.Provider value={{large,setLarge,favorite,setFavorite,pace,setPace}}><div className={large ? 'app large-text' : 'app'}>{children}</div></Context.Provider>;
}
export function useApp() { const state = useContext(Context); if (!state) throw new Error('AppProvider requerido'); return state; }
