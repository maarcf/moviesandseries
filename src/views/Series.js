import { MainFlex } from '../components/Commons';
import InfoSection from '../components/InfoSection';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';

const Series = () => {  
  const {
    results: popularSeries,
    isLoading: isLoadingPopular
  } = useFetch('popular', 'tv');
  const {
    results: topRatedSeries,
    isLoading: isLoadingTopRated
  } = useFetch('top_rated', 'tv');
  const {
    results: onAirSeries,
    isLoading: isLoadingOnAir
  } = useFetch('on_the_air', 'tv');

  return(
    <MainFlex as="main" flexDirection="column"
      justifyContent="center">
      {
        isLoadingPopular
        ? <Loader />
        : popularSeries && <InfoSection 
          title="Series populares" 
          mediaType="tv"
          category= "popular"
          info={popularSeries}
        />
      }

      {
        isLoadingTopRated
        ? <Loader />
        : topRatedSeries && <InfoSection 
          title="Series con mejores críticas" 
          mediaType="tv"
          category= "top_rated"
          info={topRatedSeries}
        />
      }

      {
        isLoadingOnAir
        ? <Loader />
        : onAirSeries && <InfoSection 
          title="Series al aire" 
          mediaType="tv"
          category= "on_the_air"
          info={onAirSeries}
        />
      }
    </MainFlex>
  );
};

export default Series;