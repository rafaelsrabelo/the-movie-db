import styles from './styles.module.css'
import { TelevisionSimple } from "phosphor-react"

export function Header() {
  return (
    <header className={styles.header}>
      THEMOVIEDB <TelevisionSimple size={32} weight="bold" />
    </header>
  )
}