import styled from 'styled-components';

import { NavLinkStyled, ItemListStyled } from './Commons';

const NavLinkMenu = styled(NavLinkStyled)`
  @media (max-width:${props => props.theme.breakpoints.medium}) {
    svg {
      font-size: 40px;
    }
  }
  
  @media (max-width:${props => props.theme.breakpoints.small}) {
    p {
      font-size: ${props => props.theme.sizes.small};
    } 
  }
`;

const ItemList = ({ path, ariaLabel, child }) => {
  return(
    <ItemListStyled>
      <NavLinkMenu activeClassName="selected" exact to={path} aria-label={ariaLabel}>
        {child}
      </NavLinkMenu>
    </ItemListStyled>
  );
};

export default ItemList;