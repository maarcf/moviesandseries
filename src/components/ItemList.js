import styled from 'styled-components';

import { NavLinkStyled, ItemListStyled } from './Commons';

const NavLinkMenu = styled(NavLinkStyled)`
  @media (max-width:${props => props.theme.breakpoints.medium}) {
    svg {
      font-size: 40px;
    }
  }
`;

const ItemList = ({ path, ariaLabel, icon }) => {
  return(
    <ItemListStyled>
      <NavLinkMenu activeClassName="selected" exact to={path} aria-label={ariaLabel}>
        {icon}
      </NavLinkMenu>
    </ItemListStyled>
  );
};

export default ItemList;