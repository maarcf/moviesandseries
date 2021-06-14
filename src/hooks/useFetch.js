import { useState, useEffect } from 'react'

import { createURL } from '../utils/variables';

const useFetch = (category, mediaType, id, pageNumber) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(createURL(category, mediaType, id, pageNumber))
    .then(res => res.json())
    .then(data => setInfo(data.results))
  }, []);

  return info;
};

export default useFetch;
