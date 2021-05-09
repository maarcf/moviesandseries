import { Link } from 'react-router-dom';

import MoviesCardsContainer from '../components/MoviesCardsContainer';
import SeriesCardsContainer from '../components/SeriesCardsContainer';

let number = 1;

const Home = () => {
  return(
    <>
      <h2>Soy Home</h2>
      <Link to={`/movies/trending/page/${number}`}>
        <MoviesCardsContainer title="Movies Tendencia" />
      </Link>
      <Link to={`/Series/trending/page/${number}`}>
        <SeriesCardsContainer title="Series Tendencia" />     
      </Link>
    </>
  )

}

export default Home;
