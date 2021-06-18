import { MainFlex } from '../components/Commons';
import InfoSection from '../components/InfoSection';
import useFetch from '../hooks/useFetch';

const Series = () => {
  const {results: popularSeries} = useFetch('popular', 'tv');
  const {results: topRatedSeries} = useFetch('top_rated', 'tv');
  const {results: onAirSeries} = useFetch('on_the_air', 'tv');

  return(
    <MainFlex as="main" flexDirection="column"
      justifyContent="center">
      {popularSeries && 
        <InfoSection 
          title="Series populares" 
          mediaType="tv"
          category= "popular"
          info={popularSeries}
        />
      }

      {topRatedSeries && 
        <InfoSection 
          title="Series con mejores críticas" 
          mediaType="tv"
          category= "top_rated"
          info={topRatedSeries}
        />
      }

      {onAirSeries && 
        <InfoSection 
          title="Series al aire" 
          mediaType="tv"
          category= "on_the_air"
          info={onAirSeries}
        />
      }
    </MainFlex>
  )
};

export default Series;