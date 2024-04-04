import styles from "../styles/components.module.css"
import { useAppContext } from "./context"

export default function Header() {
    const context = useAppContext()
    const score = context?.score
    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.name}`}>
                Rock<br />
                Paper<br />
                Scissors
            </div>

            <div className={`${styles.score}`}>
                <h2>Score</h2>
                <p>{`${score}`}</p>
            </div>
        </header>
    )
}