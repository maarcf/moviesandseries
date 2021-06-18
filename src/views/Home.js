import { MainFlex } from '../components/Commons';
import useFetch from '../hooks/useFetch';

import InfoSection from '../components/InfoSection';
import Loader from '../components/Loader';


const Home = () => {

  const {
    results: movieInfo,
    isLoading: isLoadingMovie
  } = useFetch('trending', 'movie');
  const {
    results: tvInfo,
    isLoading: isLoadingTv
  } = useFetch('trending', 'tv');

  return(
    <MainFlex as="main" flexDirection="column"
      justifyContent="center">
      { 
        isLoadingMovie 
        ? <Loader />
        : movieInfo && <InfoSection 
          title="Películas que son tendencia" 
          mediaType="movie"
          category= "trending"
          info={movieInfo}
        />
      }        

      {isLoadingTv 
        ? <Loader />
        : tvInfo && <InfoSection 
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
