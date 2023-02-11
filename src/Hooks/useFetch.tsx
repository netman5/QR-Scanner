import React from 'react';
import axios from 'axios';

export const useFetch = (url: string, initialState: any) => {
  const [data, setData] = React.useState(initialState);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchData = async (url: string) => {
    setLoading(true);
    const response = await axios(url)
      .then((res) => res.data)
      .catch((err) => {
        setError(err);
      }
      );
    setData(response);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData(url);
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
