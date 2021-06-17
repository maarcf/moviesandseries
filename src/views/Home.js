
import { MainContainer } from '../components/Commons';
import useFetch from '../hooks/useFetch';

import MainSection from '../components/MainSection';


const Home = () => {
  const {results: movieInfo} = useFetch('trending', 'movie');
  const {results: tvInfo} = useFetch('trending', 'tv');

  return(
    <MainContainer flexDirection="column"
      justifyContent="center">
      {movieInfo && 
        <MainSection 
          title="Películas que son tendencia" 
          mediaType="movie"
          category= "trending"
          info={movieInfo}
        />
      }

      {tvInfo && 
        <MainSection 
          title="Series que son tendencia" 
          mediaType="tv" 
          category= "trending"
          info={tvInfo}
        />
      } 
    </MainContainer>
  )
};

export default Home;
