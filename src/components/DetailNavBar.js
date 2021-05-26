import { Switch, Route, NavLink, useParams } from 'react-router-dom';

import MovieInfo from './MovieInfo';
import MovieSimilar from './MovieSimilar';
import MovieTrailer from './MovieTrailer';
import MovieCast from './MovieCast';

const DetailNavBar = () => {
  const { id } = useParams();

  return(
    <>
    <nav>
      <ul>
        <li>
          <NavLink to={`/movies/${id}/info`}>INFO</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${id}/cast`}>REPARTO</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${id}/videos`}>VIDEOS</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${id}/similar`}>SIMILARES</NavLink>
        </li>
      </ul>
    </nav> 

    
    <Switch>
      <Route exact path={`/movies/${id}/info`} component={MovieInfo} />
      <Route exact path={`/movies/${id}/cast`} component={MovieCast} />
      <Route exact path={`/movies/${id}/videos`} component={MovieTrailer} />
      <Route exact path={`/movies/${id}/similar`} component={MovieSimilar} />      
    </Switch>
    </>
  )
}

export default DetailNavBar;