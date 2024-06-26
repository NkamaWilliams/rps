'use client'
import Image from "next/image"
import styles from "../styles/components.module.css"
import { useAppContext } from "./context"

export default function Rules(){
    const context = useAppContext()
    const rules = context?.rules
    const closeRules = context?.closeRules
    return(
        <>
        {rules && <div className={`${styles.rules}`}>
            <div className={`${styles.ruleContainer}`}>
                <header className={`${styles.ruleHeader}`}>
                    <h2>Rules</h2>

                    <div className={`${styles.close}`} onClick={closeRules}>
                        <Image alt="Close" src="/icon-close.svg" fill style={{objectFit: "contain"}}/>
                    </div>
                </header>

                <div className={`${styles.imageContainer}`}>
                    <Image alt="Close" src="/image-rules.svg" fill style={{objectFit: "contain"}}/>
                </div>
            </div>
        </div>}
        </>
    )
}