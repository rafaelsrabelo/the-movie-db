import { useState, useEffect } from 'react'
import styles from './styles.module.css'

export function Popular() {
  const [movies, setMovies] = useState([])

  useEffect(() => {

  }, [])

  return (
    <div className={styles.container}>
      <h1>Populares 🚀</h1>
      <div className={styles.cardDisplay}>
        <div className={styles.card}>
          <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg" alt="" />

          <h4>Morbius</h4>
          <p>Mar 30, 2022</p>
        </div>
      </div>
    </div>
  )
}