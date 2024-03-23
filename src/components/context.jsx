'use client'
import { useState, useContext, createContext } from "react"

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function AppProvider({children}){
    const [rules, viewRules] = useState(true)
    const [score, setScore] = useState(0)

    const openRules = () => viewRules(true)
    const closeRules = () => viewRules(false)
    const resetScore = () => setScore(0)

    return(
        <AppContext.Provider value={{rules, score, openRules, closeRules, resetScore}}>
            {children}
        </AppContext.Provider>
    )
}