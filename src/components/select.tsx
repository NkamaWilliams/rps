'use client'
import { useAppContext } from "./context"
import styles from "@/styles/select.module.css"
import Image from "next/image"

export default function Select(){
    const context = useAppContext()
    const selection = context?.selection || []
    const handleSelect = (id:string) => {
        if (context?.selected == ""){
            context.set(id, 0)
        }
        else{
            alert("Move has already been selected!")
        }
    }
    return(
        <section className={styles.section}>
            <div className={`${styles.rock} ${styles.wrapper} ${styles.left}`} onClick = {() => {handleSelect(selection[0])}}>
                <div className={styles.icon}>
                    <Image alt={`${selection[0].replace(".svg", "")}`} src={`/${selection[0]}`} fill style={{objectFit: "contain"}}/>
                </div>
            </div>
            
            <div className={`${styles.paper} ${styles.wrapper} ${styles.right}`} onClick = {() => {handleSelect(selection[1])}}>
                <div className={styles.icon}>
                    <Image alt={`${selection[1].replace(".svg", "")}`} src={`/${selection[1]}`} fill style={{objectFit: "contain"}}/>
                </div>
            </div>

            <div className={`${styles.scissors} ${styles.wrapper} ${styles.bottom}`} onClick = {() => {handleSelect(selection[2])}}>
                <div className={styles.icon}>
                    <Image alt={`${selection[2].replace(".svg", "")}`} src={`/${selection[2]}`} fill style={{objectFit: "contain"}}/>
                </div>
            </div>
        </section>
    )
}