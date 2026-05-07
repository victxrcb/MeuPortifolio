import { useScrollProgress } from '../hooks/useParallax'
import styles from './ProgressBar.module.css'

export default function ProgressBar() {
  const progress = useScrollProgress()
  return (
    <div className={styles.bar} style={{ transform: `scaleX(${progress})` }} />
  )
}
