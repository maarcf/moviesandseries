import { useState, useEffect } from 'react'

import { createURL } from '../utils/variables';

const useFetch = (category, mediaType, id, detaills, pageNumber) => {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(createURL(category, mediaType, id, detaills, pageNumber))
    .then(res => res.json())
    .then(data => {
      setInfo(data);
      setIsLoading(false);
    })
  }, [category, mediaType, id, detaills, pageNumber]);

  return {...info, isLoading};
};

export default useFetch;
