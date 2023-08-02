import { useState } from 'react';
import axios from 'axios';

// Type
type asyncPostDataProps<T> = {
  path: string;
  data: T;
  api_url: string;
};

type useAsyncPostDataProps<U> = {
  setData: any;
};
const useAsyncPostData = <U,>({ setData }: useAsyncPostDataProps<U>) => {
  const asyncPostData = async <T,>(props: asyncPostDataProps<T>) => {
    const { path, data, api_url } = props;
    try {
      await axios.post(`${api_url}/${path}`, data);
      setData((prev: any) => [
        ...prev,
        {
          id: prev.length + 1,
          ...data,
        },
      ]);
    } catch (error: any) {
      alert('failed error');
    }
  };
  return { asyncPostData };
};

export default useAsyncPostData;
