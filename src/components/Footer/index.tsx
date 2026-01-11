import styles from "./style.module.css";
import { RouterLink } from "../RouterLink";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro">
        Understand how the Pomodoro technique works
      </RouterLink>
      <RouterLink href="/">
        Chronos pomodoro &copy; {new Date().getFullYear()} - made with s2
      </RouterLink>
    </footer>
  );
}
