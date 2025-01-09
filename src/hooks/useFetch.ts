import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<null | any>(null);
  const [error, setError] = useState<null | any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error: unknown) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;