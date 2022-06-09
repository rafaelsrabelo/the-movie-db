import { useState, useEffect } from 'react'
import styles from './styles.module.css'

export function Popular() {
  const [movies, setMovies] = useState([])
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=8f7ceb210fa27ba17b3483955ea57cd7")
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setMovies(data.results)
      })
  }, [])

  return (
    <div className={styles.container}>
      <h1>Populares 🚀</h1>
      <div className={styles.cardDisplay}>
        {
          movies.map(movie => {
            return (
              <div className={styles.card} key={movie.id}>

                <img src={`${image_path}${movie.poster_path}`} alt="" />

                <h4>{movie.title}</h4>
                <p>{movie.description}</p>
                <p>{movie.release_date}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}