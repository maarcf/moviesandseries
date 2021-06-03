
import { NavLinkStyled, ItemListStyled } from './Commons';

const ItemList = ({ path, icon }) => {
  return(
    <ItemListStyled>
      <NavLinkStyled activeClassName="selected" exact to={path}>
        {icon}
      </NavLinkStyled>
    </ItemListStyled>
  );
};

export default ItemList;