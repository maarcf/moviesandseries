import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { ListStyled } from './Commons';
import ItemList from "./ItemList";
import InfoDetail from './InfoDetail';
import SimilarDetail from './SimilarDetail';
import MovieTrailer from './MovieTrailer';
import ItemCast from './ItemCast';

const NavBar = styled.nav`
  margin-bottom: ${props => props.theme.spaces.medium};
`;


const DetailNavBar = ({ mediaType, id, info }) => {
  const item = mediaType === 'movie' ? 'película' : 'serie';

  return(
    <>
      <NavBar>
        <ListStyled>
          <ItemList path={`/${mediaType}/${id}/info`}
            ariaLabel={`Detalle de la ${item}`}
            child={<p>INFO</p>}
          />

          <ItemList path={`/${mediaType}/${id}/cast`}
            ariaLabel={`Detalle de la ${item}`}
            child={<p>REPARTO</p>}
          />
            
          {
            mediaType === 'movie'
            ? <ItemList path={`/${mediaType}/${id}/videos`}
              ariaLabel={`Detalle de la ${item}`}
              child={<p>VIDEOS</p>}
            />
            : <ItemList path={`/${mediaType}/${id}/episodios`}
              ariaLabel={`Detalle de la ${item}`}
              child={<p>EPISODIOS</p>}
            />
          }

          <ItemList path={`/${mediaType}/${id}/similar`}
            ariaLabel={`Detalle de la ${item}`}
            child={<p>SIMILARES</p>}
          />
        </ListStyled>
      </NavBar>

      <Switch>
        <Route exact path={`/${mediaType}/${id}/info`} 
          component={() => <InfoDetail mediaType={mediaType} info={info} />} 
        />
        <Route exact path={`/${mediaType}/${id}/cast`} 
          component={ItemCast} />
        <Route exact path={`/${mediaType}/${id}/videos`} 
          component={MovieTrailer} />
        <Route exact path={`/${mediaType}/${id}/episodios`} 
          component={MovieTrailer} />
        <Route exact path={`/${mediaType}/${id}/similar`} 
          component={() => <SimilarDetail mediaType={mediaType} id={id} />} 
        />     
      </Switch>
    </>
  )
}

export default DetailNavBar;