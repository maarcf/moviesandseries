import styled from 'styled-components';

import { Flex } from '../components/Commons';
import useFetch from '../hooks/useFetch';

import MoviesCardsContainer from '../components/MoviesCardsContainer';
import SeriesCardsContainer from '../components/SeriesCardsContainer';

const HomeSection = styled(Flex)`
  max-width: 1300px;
  margin: ${props => props.theme.spaces.large} ${props => props.theme.spaces.medium};
`; 

const Home = () => {
  const movieInfo = useFetch('trending', 'movie')
  const tvInfo = useFetch('trending', 'tv')

  console.log(movieInfo)
  console.log(tvInfo)
  return(
    <HomeSection as="main"
      flexDirection="column"
      justifyContent="center">
        <MoviesCardsContainer 
          title="Películas que son tendencia" 
          mediaType="movie"
          category= "trending"
          info= {movieInfo}
        />

        <MoviesCardsContainer 
          title="Series que son tendencia" 
          mediaType="tv" 
          category= "trending"
          info= {tvInfo}
        /> 
    </HomeSection>
  )

}

export default Home;
