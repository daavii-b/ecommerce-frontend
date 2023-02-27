import { useEffect, useState } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import axios from '../services/axios';

export function useAxios(url) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [qs] = useSearchParams();

  useEffect(() => {
    axios({
      method: 'GET',
      url,
      signal: AbortSignal.timeout(3000),
      params: {
        page: qs.get('page'),
        search: qs.get('search'),
        category: qs.get('category'),
      },
    })
      .then((response) => {
        const { results, count: countData } = response.data;

        setData(results);
        setCount(countData);
      })
      .catch((error) => console.error(error));
  }, [qs, url]);

  return { data, count };
}

export function useAxiosGetDetails(url) {
  const { productSlug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: url.concat(`${productSlug}/`),
      signal: AbortSignal.timeout(3000),
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, [productSlug, url]);

  return { data };
}
