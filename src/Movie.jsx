import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./components/Header";

export default function Movie() {

  const { id } = useParams();
  const [movie, setMovies] = useState({})
  const image_path = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8f7ceb210fa27ba17b3483955ea57cd7`)
      .then(response => response.json())
      .then(data => {

        const { title, poster_path, overview, release_date } = data;

        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          releaseDate: release_date
        }

        setMovies(movie)
      })
  }, [id])

  return (
    <div>
      <Header />
      <h1>{movie.title}</h1>
    </div>
  )
}