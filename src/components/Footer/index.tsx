import styles from "./style.module.css";
import { RouterLink } from "../RouterLink";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro">
        Entenda como funciona a tecnica pomodoro
      </RouterLink>
      <RouterLink href="/">
        cronos pomodoro &copy; {new Date().getFullYear()} - feito com s2
      </RouterLink>
    </footer>
  );
}
