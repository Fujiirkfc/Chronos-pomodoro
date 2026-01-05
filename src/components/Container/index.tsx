import styles from "./styles.module.css";
import type React from "react";

type ContainerProps = {
  children: React.ReactNode;
};
export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
