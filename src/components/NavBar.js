import styled from 'styled-components';

import NavigationList from './NavigationList';
import { Flex, ImageContainer, ImageStyled } from './Commons';

import Logo from '../utils/img/logo.png';

const NavStyled = styled(Flex)`
  width: 100%;
  background-color: ${props => props.theme.colors.bgSecondary};
  padding: ${props => props.theme.spaces.extraSmall} ${props => props.theme.spaces.small}
`;

const LogoContainer = styled(ImageContainer)`
  margin-right: ${props => props.theme.spaces.small};
`;

const NavBar = () => {
  return (
    <NavStyled as='nav'
    justifyContent='space-between'>
      <Flex tabIndex="0">
        <LogoContainer width='50px'>
          <ImageStyled src={Logo} alt="Logo de Peliculas y Series App." />
        </LogoContainer>

        <NavigationList />
      </Flex>
      
    </NavStyled>
  );
};

export default NavBar;
