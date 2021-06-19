import { MainFlex } from '../components/Commons';
import InfoSection from '../components/InfoSection';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';

const Movies = () => {
  const {
    results: popularMovies,
    isLoading: isLoadingPopular
  } = useFetch('popular', 'movie');
  const {
    results: topRatedMovies,
    isLoading: isLoadingTopRated
  } = useFetch('top_rated', 'movie');
  const {
    results: upcomingMovies,
    isLoading: isLoadingUpcoming
  } = useFetch('upcoming', 'movie');
  const {
    results: nowPlayingMovies,
    isLoading: isLoadingNowPlaying
  } = useFetch('now_playing', 'movie');

  return(
    <MainFlex as="main" flexDirection="column"
      justifyContent="center">
      {
        isLoadingPopular
        ? <Loader />
        : popularMovies && <InfoSection 
          title="Películas populares" 
          mediaType="movie"
          category= "popular"
          info={popularMovies}
        />
      }

      {
        isLoadingTopRated
        ? <Loader />
        : topRatedMovies && <InfoSection 
          title="Películas con mejores críticas" 
          mediaType="movie"
          category= "top_rated"
          info={topRatedMovies}
        />
      }

      {
        isLoadingUpcoming
        ? <Loader />
        : upcomingMovies && <InfoSection 
          title="Películas a estrenarse" 
          mediaType="movie"
          category= "upcoming"
          info={upcomingMovies}
        />
      }

      {
        isLoadingNowPlaying
        ? <Loader />
        : nowPlayingMovies && <InfoSection 
          title="Películas en el cine" 
          mediaType="movie"
          category= "now_playing"
          info={nowPlayingMovies}
        />
      }
    </MainFlex>
  );
};

export default Movies;