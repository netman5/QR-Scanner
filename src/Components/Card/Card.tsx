import { Grid, Typography, Card as CardItem, CardActionArea, CardMedia, CardContent } from '@mui/material'
import { Movie } from '../../Types/appTypes'

const Card = ({ Title, Images }: Movie) => {
  return (
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} sm={12} md={12}>
        <CardItem sx={{ width: '80%', margin: '30px auto' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={Images[0]}
              alt={Title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {Title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </CardItem>
      </Grid>
    </Grid>
  )
}

export default Card