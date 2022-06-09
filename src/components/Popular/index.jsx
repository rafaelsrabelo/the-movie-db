import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { MagnifyingGlass } from 'phosphor-react'

export function Popular() {
  const [initialMovies, setInitialMovies] = useState([])
  const [movies, setMovies] = useState([])

  const image_path = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=8f7ceb210fa27ba17b3483955ea57cd7")
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setInitialMovies(data.results)
        setMovies(data.results)
      })
  }, [])

  const handleChange = ({ target }) => {
    if (!target.value) {
      setMovies(initialMovies)
      return;
    }

    const filterMovie = movies.filter(({ title }) => title.includes(target.value))
    setMovies(filterMovie)
    console.log(filterMovie)
  }

  return (
    <div>
      <header>
        <h1>Mais recentes 🚀</h1>
        <div className={styles.searchBar}>
          <MagnifyingGlass size={24} weight="bold" />
          <input type="search" onChange={handleChange} />
        </div>
      </header>
      <div className={styles.container}>
        {
          movies.map(movie => {
            return (
              <div className={styles.card} key={movie.id}>

                <img title={movie.title} src={`${image_path}${movie.poster_path}`} alt="" />

                <h4>{movie.title}</h4>
                <Link to={`/movie/${movie.id}`}>
                  Acessar
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}