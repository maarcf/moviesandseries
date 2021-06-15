
import { MainContainer } from '../components/Commons';
import useFetch from '../hooks/useFetch';

import MainSection from '../components/MainSection';


const Home = () => {
  const movieInfo = useFetch('trending', 'movie')
  const tvInfo = useFetch('trending', 'tv')

  console.log(movieInfo)
  console.log(tvInfo)
  return(
    <MainContainer flexDirection="column"
      justifyContent="center">
        <MainSection 
          title="Películas que son tendencia" 
          mediaType="movie"
          category= "trending"
          info= {movieInfo}
        />

        <MainSection 
          title="Series que son tendencia" 
          mediaType="tv" 
          category= "trending"
          info= {tvInfo}
        /> 
    </MainContainer>
  )

}

export default Home;
