import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { MainFlex } from '../components/Commons';
import InfoSection from '../components/InfoSection';
import PaginationNav from '../components/PaginationNav';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';

const titles = {
  movie: {
    popular: "Películas Populares",
    top_rated: "Películas con mejores críticas",
    upcoming: "Películas a estrenarse",
    now_playing: "Películas en el cine",
    trending: "Películas que son tendencia",
  },

  tv: {
    popular: "Series Populares",
    top_rated: "Series con mejores críticas",
    on_the_air: "Series al aire",
    trending: "Series que son tendencia",
  },
};

const Categories = () => {
  const [page, setPage] = useState(1);
  const { mediaType, category } = useParams();

  const {
    results: info, 
    total_pages: totalPages,
    isLoading
  } = useFetch(category, mediaType,'','', page);

  return (
    <MainFlex as="main" flexDirection="column"
      justifyContent="center">
      {
        isLoading
        ? <Loader />
        : info && <InfoSection 
          title={titles[mediaType][category]} 
          mediaType={mediaType}
          category= {category}
          info={info}
        />
      }      
      <PaginationNav totalPages={totalPages} setPage={setPage} />
    </MainFlex>
  );
};

export default Categories;
