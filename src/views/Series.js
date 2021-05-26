import { Link } from 'react-router-dom';

let number = 1;

const Series = () => {
  return(
    <>
      <h2>Soy Series</h2>
      <Link to={`/tv/popular/page/${number}`}>
        <p>Series Populares</p>
      </Link>
      <Link to={`/tv/top_rated/page/${number}`}>
        <p>Series Mejores Punuadas</p>
      </Link>
      <Link to={`/tv/on_the_air/page/${number}`}>
        <p>Series A estrenarsea</p>
      </Link>
    </>
    
  )

}

export default Series;