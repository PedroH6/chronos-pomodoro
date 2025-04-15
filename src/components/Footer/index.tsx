import { Link } from "react-router"
import styles from "./styles.module.css"

export function Footer() {
    return (
        <>
        <footer className={styles.footer}>
         <Link to="/about-pomodoro/">Entenda como funciona a tecnica pomodoro</Link>
         <a href="#">Chronos pomodoro &copy; {new Date().getFullYear()} - Feito com ❤</a>
        </footer>
        </>
    )
}