import styles from "./components.module.css"
import { useAppContext } from "./context"

export default function Header() {
    const {score} = useAppContext()
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