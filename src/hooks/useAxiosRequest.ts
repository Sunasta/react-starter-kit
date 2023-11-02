import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  
  // You can set other default configurations here, like headers, etc.
});

export function useAxios<T>(url: string, config?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axiosInstance.get(url, config);
        setData(response.data);
      } catch (error) {
        setError('An error occurred while fetching the data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, config]);

  return { data, loading, error };
}

// import { useState } from 'react';
// import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// interface UseAxiosRequestState<T> {
//   data: T | null;
//   loading: boolean;
//   error: AxiosError<unknown> | null;
// }

// type UseAxiosRequestHook<T> = [UseAxiosRequestState<T>, (config: AxiosRequestConfig) => void];

// const axiosInstance = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
//   // You can set other default configurations here, like headers, etc.
// });

// function useAxiosRequest<T>(): UseAxiosRequestHook<T> {
//   const initialState: UseAxiosRequestState<T> = {
//     data: null,
//     loading: false,
//     error: null,
//   };

//   const [state, setState] = useState<UseAxiosRequestState<T>>(initialState);

//   const makeRequest = async (config: AxiosRequestConfig) => {
//     try {
//       setState({ ...initialState, loading: true });
//       const response: AxiosResponse<T> = await axiosInstance(config);
//       setState({ ...initialState, data: response.data });
//     } catch (error) {
//       setState({ ...initialState, error: error as AxiosError<unknown> });
//     } finally {
//       setState((prevState) => ({ ...prevState, loading: false }));
//     }
//   };

//   return [state, makeRequest];
// }

// export default useAxiosRequest;
