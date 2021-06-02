import { useState, useRef, useEffect } from 'react';
import { NavLinkStyled, ItemListStyled } from './Commons';

const ItemList = ({ path, iconFilled, iconOutlined }) => {
  const [ isSelected, setSelected ] = useState(false);
  const hasSelectedClass = useRef();

  useEffect(() => {
    const linkElement = hasSelectedClass.current;
    linkElement.classList.contains('selected') === true && setSelected(true);
    console.log(linkElement.classList.contains('selected'))
    return setSelected(false);
  }, []);

  
  const showIcon = isSelected ? iconFilled : iconOutlined;
  console.log(showIcon)

  return(
    <ItemListStyled>
      <NavLinkStyled activeClassName="selected" exact to={path} ref={hasSelectedClass}>
        {showIcon}
      </NavLinkStyled>
    </ItemListStyled>
  );
};

export default ItemList;