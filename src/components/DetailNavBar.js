import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';

import MovieInfo from './MovieInfo';
import MovieSimilar from './MovieSimilar';
import MovieTrailer from './MovieTrailer';
import MovieCast from './MovieCast';

const DetailNavBar = () => {
  const {url, path} = useRouteMatch();
  console.log("path de NAvBar", path)

  return(
    <>
    <nav>
      <ul>
        <li>
          <NavLink to={`${url}`}>INFO</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/cast`}>REPARTO</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/videos`}>VIDEOS</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/similar`}>SIMILARES</NavLink>
        </li>
      </ul>
    </nav> 

  
    <Switch>
      <Route exact path={`${path}`}>
        <MovieInfo />
      </Route>
      <Route exact path={`${path}/cast`} component={MovieCast} />
      <Route exact path={`${path}/videos`} component={MovieTrailer} />
      <Route exact path={`${path}/similar`} component={MovieSimilar} />      
    </Switch>
    </>
  )
}

export default DetailNavBar;