import { useState, useEffect } from 'react'

import { createURL } from '../utils/variables';

const useFetch = (category, mediaType, id, detaills, pageNumber) => {
  const [info, setInfo] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(createURL(category, mediaType, id, detaills, pageNumber))
    .then(res => res.json())
    .then(data => {
      setInfo(data.results);
      setTotalPages(data.total_pages);
    })
  }, [category, mediaType, id, detaills, pageNumber]);

  return {
    info: info,
    totalPages: totalPages,
  };
};

export default useFetch;
