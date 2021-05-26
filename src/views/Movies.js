import { Link } from 'react-router-dom';

import MoviesCardsContainer from '../components/MoviesCardsContainer';

let number = 1;

const Movies = () => {
  return(
    <>
      <h2>Soy Movies</h2>
      {/* Category vendría desde la api. Al igual que la pag.*/}
      <Link to={`/movie/popular/page/${number}`}>
        <MoviesCardsContainer title="Movies Populares" />
      </Link>
      <Link to={`/movie/top_rated/page/${number}`}>
        <MoviesCardsContainer title="Movies Mejores Puntuadas" />
      </Link>
      <Link to={`/movie/upcoming/page/${number}`}>
        <MoviesCardsContainer title="Movies A estrenarse" />
      </Link>
      <Link to={`/movie/now_playing/page/${number}`}>
        <MoviesCardsContainer title="Movies En el cine" />
      </Link>
    </>
  )

}

export default Movies;