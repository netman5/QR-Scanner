import React from 'react'
import Card from '../Card/Card'
import { Movie } from '../../Types/appTypes'
import { Box, Typography } from '@mui/material'

const Movies = () => {
  const [movies, setMovies] = React.useState<Movie[]>([])
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('http://localhost:9000/api/movies')
        .then((res) => res.json())
        .catch((err) => {
          setError(err)
        })
      setMovies(response)
    }
    fetchMovies()
  }, [])


  if (error) return <div>`Error ${error}`</div>
  return (
    <Box sx={{ width: '80%', margin: '100px auto' }}>
      <Typography variant='h2' mb={4} sx={{ textAlign: 'center' }}>Movies</Typography>
      <Box sx={{ width: '100%' }}>
        {movies.map((movie: JSX.IntrinsicAttributes & Movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </Box>
    </Box>
  )
}

export default Movies