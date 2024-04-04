'use client'
import styles from "@/styles/select.module.css"
import Image from "next/image"

interface Props{
    src: string,
    func: (key:string) => void
}

export default function Icon({src, func}:Props){
    return(
        <div className={`${styles.rock} ${styles.wrapper}`} onClick = {() => {func(src)}}>
                <div className={styles.icon}>
                    <Image alt={`${src.replace(".svg", "")}`} src={`/${src}`} fill style={{objectFit: "contain"}}/>
                </div>
        </div>
    )
}