import React from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import { Movie } from '../../Types/appTypes'

const Movies = () => {
  const [movies, setMovies] = React.useState([] as Movie[])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  const fetchMovies = React.useCallback(async () => {
    const response = await axios('http://localhost:9000/api/movies')
    return response.data
  }, [])

  React.useEffect(() => {
    setLoading(true)
    fetchMovies()
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
      .then((data) => {
        setMovies(data)
        setLoading(false)
      })
  }, [fetchMovies])

  if (error) return <div>Error</div>

  console.log(movies);


  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  )
}

export default Movies