import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const Scanner = () => {
  const { data, error, loading } = useFetch('http://localhost:9000/api/qrcode', { data: { message: '', data: '' } })

  if (error) return <Typography variant='h2' sx={{ textAlign: 'center' }}>Error</Typography>

  return (
    <Box sx={{ width: '100%', margin: '100px auto' }}>
      <Typography variant='h4' mb={5} sx={{ textAlign: 'center' }}>Scan To Get Movies</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {loading ? <div>Loading... Or Generating QR</div> : <img src={data.data} alt="QR Code" />}
      </Box>
    </Box>
  )
}

export default Scanner