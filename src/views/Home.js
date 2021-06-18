import { useState } from 'react';

import { MainFlex } from '../components/Commons';
import useFetch from '../hooks/useFetch';

import InfoSection from '../components/InfoSection';
import Loader from '../components/Loader';


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const {results: movieInfo} = useFetch('trending', 'movie');
  const {results: tvInfo} = useFetch('trending', 'tv');

  

  return(
    <MainFlex as="main" flexDirection="column"
      justifyContent="center">
      {/* { 
        isLoading 
        ? <Loader />
        : <InfoSection 
            title="Películas que son tendencia" 
            mediaType="movie"
            category= "trending"
            info={movieInfo}
          />
      } */}
      {movieInfo && 
        <InfoSection 
          title="Películas que son tendencia" 
          mediaType="movie"
          category= "trending"
          info={movieInfo}
        />
      }

      {tvInfo && 
        <InfoSection 
          title="Series que son tendencia" 
          mediaType="tv" 
          category= "trending"
          info={tvInfo}
        />
      } 
    </MainFlex>
  )
};

export default Home;
