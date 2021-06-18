import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import styled from 'styled-components';

import { ListStyled } from './Commons';

import ItemList from "./ItemList";

const MenuList = styled(ListStyled)`
  @media (max-width:${props => props.theme.breakpoints.medium}) {
    background-color: ${props => props.theme.colors.bgSecondary};
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const NavigationList = () => {
  return(
    <MenuList>
      <ItemList path="/" ariaLabel="Inicio" child={<HomeIcon />} />

      <ItemList path="/movie" ariaLabel="Películas" child={<MovieIcon />} />

      <ItemList path="/tv" ariaLabel="Series" child={<LiveTvIcon />} />
    </MenuList>
  );
};

export default NavigationList;