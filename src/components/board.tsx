'use client'
import { useAppContext } from "./context"
import { useEffect, useState } from "react"
import Select from "./select"
import Image from "next/image"
import styles from "@/styles/board.module.css"
import iconStyles from "@/styles/select.module.css"

interface Props{
    src: string,
    pos: number,
    won:boolean
}

export default function Board(){
    const context = useAppContext()
    const selected = context?.selected ?? ""
    const aiSelected = context?.aiSelected ?? ""
    const [text, setText] = useState("")

    useEffect(() => {
        const aiSelected = context?.selection[Math.floor(Math.random() * context.selection.length)] ?? "icon-paper.svg"

        context?.set(aiSelected, 1)

        const text = aiSelected == selected? "A DRAW!": context?.selection[(context.selection.indexOf(aiSelected) + 1) % 3] == selected? "YOU WIN!" : "YOU LOSE!"
        setText(text)
        console.log(text)

        if (text == "YOU WIN!"){
            localStorage.setItem('score', `${context&&(context.score+1)}`);
            context?.setScore(context.score+1)
        }

    }, [selected])
    return(
        <div>
            {selected == "" && <Select/>}

            {selected != "" && <div className={styles.result}>
                <Tile src={selected} pos={0} won={text=="YOU WIN!"}/>

                <section className={styles.message_holder}>
                    <p className={`${styles.message}`}>{ text }</p>
                    <button className={`${styles.restart}`} onClick={() => {context?.reset()}}> {text=="YOU WIN!"?"Play Again":"Try Again"} </button>
                </section>

                <Tile src={context?.aiSelected??""} pos={1} won={text == "YOU LOSE!"}/>
            </div>}
        </div>
    )
}

function Tile({src, pos, won}:Props){
    return(
        <div className={`${styles.abs} `}>
            <h2 className={styles.picked}>{pos == 0? "YOU PICKED":"THE HOUSE PICKED"}</h2>
            <div className={`${iconStyles.wrapper} ${src=="icon-rock.svg" && iconStyles.rock} ${src=="icon-paper.svg" && iconStyles.paper} ${src=="icon-scissors.svg" && iconStyles.scissors} ${styles.center} ${styles.fix} ${won && styles.winner}`}>
                <div className={`${iconStyles.icon}`}>
                    <Image alt={src} src={`/${src}`} fill style={{objectFit: 'contain'}}/>
                </div>
            </div>
        </div>
    )
}
// ${pos == 0 && iconStyles.left} ${pos == 1 && iconStyles.right}