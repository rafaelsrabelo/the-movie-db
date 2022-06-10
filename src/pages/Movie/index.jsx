import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import styles from './styles.module.css'

export default function Movie() {

  const { id } = useParams();
  const [movie, setMovies] = useState({})
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8f7ceb210fa27ba17b3483955ea57cd7`)
      .then(response => response.json())
      .then(data => {

        const { title, poster_path, overview, release_date, vote_average, genre_ids } = data;
        console.log(vote_average)

        const movie = {
          id,
          title,
          genreIds: genre_ids,
          sinopse: overview,
          vote_average,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date,
        }

        setMovies(movie)
      })
  }, [id])

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <img src={movie.image} title={movie.title} />
          <div className={styles.info}>
            <div className={styles.titleInfo}>
              <h1>{movie.title}</h1>
              <p>{movie.vote_average}</p>
              <p>{movie.genre_ids}</p>
            </div>
            <span>{movie.sinopse}</span>
            <Link to="/">Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}