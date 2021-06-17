import { MainContainer } from '../components/Commons';
import MainSection from '../components/MainSection';
import useFetch from '../hooks/useFetch';

const Series = () => {
  const popularSeries = useFetch('popular', 'tv');
  const topRatedSeries = useFetch('top_rated', 'tv');
  const onAirSeries = useFetch('on_the_air', 'tv');

  return(
    <MainContainer flexDirection="column"
      justifyContent="center">
      <MainSection 
        title="Series populares" 
        mediaType="tv"
        category= "popular"
        info={popularSeries}
      />

      <MainSection 
        title="Series con mejores críticas" 
        mediaType="tv"
        category= "top_rated"
        info={topRatedSeries}
      />

      <MainSection 
        title="Series al aire" 
        mediaType="tv"
        category= "on_the_air"
        info={onAirSeries}
      />
    </MainContainer>
  )
};

export default Series;