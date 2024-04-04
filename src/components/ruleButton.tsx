'use client'
import { useAppContext } from "./context"
import styles from "../styles/button.module.css"

export default function RuleButton(){
    const context = useAppContext()
    const handleClick = () => {
      context?.openRules()
      console.log("Done")
    }
    return(
        <button className={styles.button} onClick={handleClick}>
          RULES
        </button>
    )
}