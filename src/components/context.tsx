'use client'
import { useState, useContext, createContext, ReactNode, useEffect } from "react"

interface ProviderProps{
    children: ReactNode
}

interface ContextType{
    rules: boolean,
    score: number,
    selection: string[],
    selected: string,
    aiSelected: string,
    openRules: () => void,
    closeRules: () => void,
    resetScore: () => void,
    reset: () => void,
    set: (id:string, num:number) => void,
    setScore: React.Dispatch<React.SetStateAction<number>>
}

const AppContext = createContext<ContextType | undefined>(undefined);

export const useAppContext = () => useContext(AppContext);

export default function AppProvider({children}:ProviderProps){
    const [rules, viewRules] = useState(false)
    const [score, setScore] = useState(0)
    const [selection, setSelection] = useState(['icon-rock.svg', 'icon-paper.svg', 'icon-scissors.svg'])
    const [selected, setSelected] = useState("")
    const [aiSelected, setAiSelected] = useState("")

    const openRules = () => {
        viewRules(true)
        console.log("Rules opened!")
    }
    const closeRules = () => {viewRules(false)}
    const resetScore = () => {setScore(0)}
    const reset = () => {setSelected("")}
    const set = (id:string, num:number) => {
        if (num == 0 || num > 1){
            setSelected(id)
        }
        else{
            setAiSelected(id)
        }
    }

    useEffect(() => {
        const score = localStorage.getItem('score')
        if (score == null){
            setScore(0)
        }
        else{
            setScore(parseInt(score))
        }
    })

    return(
        <AppContext.Provider value={{rules, score, selection, selected, aiSelected, openRules, closeRules, resetScore, reset, set, setScore}}>
            {children}
        </AppContext.Provider>
    )
}