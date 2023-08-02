import { useEffect, useState } from 'react';
import axios from 'axios';

// Types Props
interface useAsyncGetDataProps<T> {
  defaultData?: T;
  path: string;
  api_url: string;
}

const useAsyncGetData = <T,>(props: useAsyncGetDataProps<T>) => {
  // Props Values
  const { defaultData, path, api_url } = props;
  // States
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  //   Async Request
  const asyncgetData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<T>(`${api_url}/${path}`);
      setLoading(false);
      setData(response.data);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };
  //Life Cycle UseEffect
  useEffect(() => {
    asyncgetData();
  }, []);
  //   Return Values
  return { data, loading, error, setData };
};

export default useAsyncGetData;
