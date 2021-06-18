import { useState, useEffect } from 'react'

import { createURL } from '../utils/variables';

const useFetch = (category, mediaType, id, detaills, pageNumber) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(createURL(category, mediaType, id, detaills, pageNumber))
    .then(res => res.json())
    .then(data => setInfo(data))
  }, [category, mediaType, id, detaills, pageNumber]);

  return {...info, stopLoading: false};
};

export default useFetch;
