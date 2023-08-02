import { useEffect, useState } from 'react';
import axios from 'axios';

interface useAsyncGetDataProps<T> {
  defaultData?: T;
  path: string;
  api_url: string;
}

const useAsyncGetData = <T,>(props: useAsyncGetDataProps<T>) => {
  const { defaultData, path, api_url } = props;

  const [data, setData] = useState<T | undefined>(defaultData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const asyncGetData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<T>(`${api_url}/${path}`);
      setData(response.data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    asyncGetData();
  }, []);

  return { data, loading, error, setData };
};

export default useAsyncGetData;
