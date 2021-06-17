import { MainContainer } from '../components/Commons';
import MainSection from '../components/MainSection';
import useFetch from '../hooks/useFetch';


const Movies = () => {
  const {results: popularMovies} = useFetch('popular', 'movie')
  const {results: topRatedMovies} = useFetch('top_rated', 'movie')
  const {results: upcomingMovies} = useFetch('upcoming', 'movie')
  const {results: nowPlayingMovies} = useFetch('now_playing', 'movie')


  return(
    <MainContainer flexDirection="column"
      justifyContent="center">
      {popularMovies && 
        <MainSection 
          title="Películas populares" 
          mediaType="movie"
          category= "popular"
          info={popularMovies}
        />}

      {topRatedMovies && 
        <MainSection 
          title="Películas con mejores críticas" 
          mediaType="movie"
          category= "top_rated"
          info={topRatedMovies}
        />}

      {upcomingMovies && 
        <MainSection 
          title="Películas a estrenarse" 
          mediaType="movie"
          category= "upcoming"
          info={upcomingMovies}
        />}

      {nowPlayingMovies && 
        <MainSection 
          title="Películas en el cine" 
          mediaType="movie"
          category= "now_playing"
          info={nowPlayingMovies}
        />}
    </MainContainer>
  )
};

export default Movies;