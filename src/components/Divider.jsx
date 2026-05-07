import styles from './Divider.module.css'

export default function Divider() {
  return (
    <div className={styles.divider}>
      <div className={styles.line} />
      <span className={styles.glyph}>✦</span>
      <span className={styles.glyphSmall}>✦</span>
      <span className={styles.glyph}>✦</span>
      <div className={styles.line} />
    </div>
  )
}
