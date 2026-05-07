import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.logo}>
          <span className={styles.accent}>&lt;</span>victor<span className={styles.accent}>/&gt;</span>
        </span>
        <span className={styles.copy}>
          © {new Date().getFullYear()} — Feito com React + Vite
        </span>
      </div>
    </footer>
  )
}
