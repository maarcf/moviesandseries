import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { MainFlex } from '../components/Commons';
import InfoSection from '../components/InfoSection';
import PaginationNav from '../components/PaginationNav';
import Loader from '../components/Loader';

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState({})
  const [page, setPage] = useState(1);
  const { query } = useParams();
  // quiza esto deberia estar con las variables en /utils
  const URL = 'https://api.themoviedb.org/3/search/multi?api_key=055a0350f6a59ecfcbd9ab2fede17992&language=es-MX';  

  useEffect(() => {
    setIsLoading(true);
    fetch(URL + `&query=${query}&page=${page}`)
    .then(res => res.json())
    .then(data => {
      setInfo(data);
      setIsLoading(false);
    })    
  }, [query, page]);

  const { results, total_pages: totalPages } = info;

  return (
    <MainFlex as="main" flexDirection="column"
      justifyContent="center">
      {
        isLoading
        ? <Loader />
        : info && <InfoSection 
          title={`Resultados para: ${query}`}
          info={results}
        />
      }      
      <PaginationNav totalPages={totalPages} setPage={setPage} />
    </MainFlex>
  );
};

export default Search;
