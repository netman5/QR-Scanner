import React from 'react'
import useFetch from '../../Hooks/useFetch'


const Scanner = () => {
  const { data, error, loading } = useFetch('http://localhost:9000/api/qrcode', { data: { message: '', data: '' } })

  if (error) return <div>Error</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>Scan To Get Movies</h1>
      {loading ? <div>Loading... Or Generating QR</div> : <img src={data.data} alt="QR Code" />}
    </div>
  )
}

export default Scanner