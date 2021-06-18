import { useState, useEffect } from 'react'

import { createURL } from '../utils/variables';

const useFetch = (category, mediaType, id, details, pageNumber) => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(createURL(category, mediaType, id, details, pageNumber))
    .then(res => res.json())
    .then(data => {
      setInfo(data);
      setIsLoading(false);
    })
  }, [category, mediaType, id, details, pageNumber]);

  return {...info, isLoading};
};

export default useFetch;
