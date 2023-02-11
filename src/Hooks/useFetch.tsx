import React from 'react';
import axios from 'axios';

export const useFetch = (url: string, initialState: any) => {
  const [data, setData] = React.useState(initialState);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchData = React.useCallback(async (url: string) => {
    const response = await axios(url);
    return response.data;
  }, []);

  React.useEffect(() => {
    setLoading(true);

    setInterval(async () => {
      fetchData(url)
        .catch((error) => {
          setError(error);
          setLoading(false);
        })
        .then((data) => {
          setData(data);
          setLoading(false);

        });
    }, 10000)
  }, [url, fetchData]);

  return { data, loading, error };
}

export default useFetch;
