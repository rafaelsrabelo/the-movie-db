import styles from './styles.module.css'
import { TelevisionSimple } from "phosphor-react"
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        THEMOVIEDB <TelevisionSimple size={32} weight="bold" />
      </Link>
    </header>
  )
}