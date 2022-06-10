import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { MagnifyingGlass } from 'phosphor-react'
import { Loading } from '../Loading'

export function Popular() {
  const [initialMovies, setInitialMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)

  const image_path = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    setTimeout(
      () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=8f7ceb210fa27ba17b3483955ea57cd7")
          .then(response => response.json())
          .then(data => {
            setInitialMovies(data.results)
            setMovies(data.results)
            setRemoveLoading(true)
          })
      }, 500
    )
  }, [])

  const handleChange = ({ target }) => {
    if (!target.value) {
      setMovies(initialMovies)
      return;
    }

    const filterMovie = movies.filter(({ title }) => title.includes(target.value))
    setMovies(filterMovie)
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
                <Link to={`/movie/${movie.id}`}>
                  <img title={movie.title} src={`${image_path}${movie.poster_path}`} alt={movie.title} />
                  <div className={styles.info}>
                    <h4>{movie.title}</h4>
                    <span className="date">
                      {new Intl.DateTimeFormat("pt-BR").format(new Date(movie.release_date))}
                    </span>
                  </div>
                </Link>
              </div>
            )
          })
        }
        {!removeLoading && <Loading />}
      </div>
    </div>
  )
}