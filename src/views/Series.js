import { MainContainer } from '../components/Commons';
import MainSection from '../components/MainSection';
import useFetch from '../hooks/useFetch';

const Series = () => {
  const {results: popularSeries} = useFetch('popular', 'tv');
  const {results: topRatedSeries} = useFetch('top_rated', 'tv');
  const {results: onAirSeries} = useFetch('on_the_air', 'tv');

  return(
    <MainContainer flexDirection="column"
      justifyContent="center">
      {popularSeries && 
        <MainSection 
          title="Series populares" 
          mediaType="tv"
          category= "popular"
          info={popularSeries}
        />
      }

      {topRatedSeries && 
        <MainSection 
          title="Series con mejores críticas" 
          mediaType="tv"
          category= "top_rated"
          info={topRatedSeries}
        />
      }

      {onAirSeries && 
        <MainSection 
          title="Series al aire" 
          mediaType="tv"
          category= "on_the_air"
          info={onAirSeries}
        />
      }
    </MainContainer>
  )
};

export default Series;