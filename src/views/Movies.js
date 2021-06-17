import { MainContainer } from '../components/Commons';
import MainSection from '../components/MainSection';
import useFetch from '../hooks/useFetch';


const Movies = () => {
  const {info: popularMovies} = useFetch('popular', 'movie')
  const {info: topRatedMovies} = useFetch('top_rated', 'movie')
  const {info: upcomingMovies} = useFetch('upcoming', 'movie')
  const {info: nowPlayingMovies} = useFetch('now_playing', 'movie')


  return(
    <MainContainer flexDirection="column"
      justifyContent="center">
      <MainSection 
          title="Películas populares" 
          mediaType="movie"
          category= "popular"
          info={popularMovies}
        />

        <MainSection 
          title="Películas con mejores críticas" 
          mediaType="movie"
          category= "top_rated"
          info={topRatedMovies}
        />

        <MainSection 
          title="Películas a estrenarse" 
          mediaType="movie"
          category= "upcoming"
          info={upcomingMovies}
        />

        <MainSection 
          title="Películas en el cine" 
          mediaType="movie"
          category= "now_playing"
          info={nowPlayingMovies}
        />
    </MainContainer>
  )
};

export default Movies;