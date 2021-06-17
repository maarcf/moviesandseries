
import { useParams } from 'react-router-dom';

import { MainContainer } from '../components/Commons';
import MainSection from '../components/MainSection';
import PaginationNav from '../components/PaginationNav';

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
  const { mediaType, category, pageNumber } = useParams();
  console.log(mediaType, category, pageNumber)

  const info = useFetch(`${category}`, `${mediaType}`);


  return (
    <MainContainer flexDirection="column"
      justifyContent="center">
      <MainSection 
        title={titles[mediaType][category]} 
        mediaType={mediaType}
        category= {category}
        info={info}
      />

      <PaginationNav />
    </MainContainer>
  );
};

export default Categories;
