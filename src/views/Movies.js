import { MainFlex } from '../components/Commons';
import InfoSection from '../components/InfoSection';
import useFetch from '../hooks/useFetch';


const Movies = () => {
  const {results: popularMovies} = useFetch('popular', 'movie')
  const {results: topRatedMovies} = useFetch('top_rated', 'movie')
  const {results: upcomingMovies} = useFetch('upcoming', 'movie')
  const {results: nowPlayingMovies} = useFetch('now_playing', 'movie')


  return(
    <MainFlex as="main" flexDirection="column"
      justifyContent="center">
      {popularMovies && 
        <InfoSection 
          title="Películas populares" 
          mediaType="movie"
          category= "popular"
          info={popularMovies}
        />}

      {topRatedMovies && 
        <InfoSection 
          title="Películas con mejores críticas" 
          mediaType="movie"
          category= "top_rated"
          info={topRatedMovies}
        />}

      {upcomingMovies && 
        <InfoSection 
          title="Películas a estrenarse" 
          mediaType="movie"
          category= "upcoming"
          info={upcomingMovies}
        />}

      {nowPlayingMovies && 
        <InfoSection 
          title="Películas en el cine" 
          mediaType="movie"
          category= "now_playing"
          info={nowPlayingMovies}
        />}
    </MainFlex>
  )
};

export default Movies;