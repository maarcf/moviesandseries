import styled from 'styled-components';

import NavigationList from './NavigationList';
import { Flex, ImageContainer, ImageStyled } from './Commons';

import Logo from '../utils/img/logo.png';

const NavStyled = styled(Flex)`
  width: 100%;
  background-color: ${props => props.theme.colors.bgSecondary};
  padding: ${props => props.theme.spaces.extraSmall} ${props => props.theme.spaces.small}
`;

const MainTitle = styled.h1`
  font-family: ${props => props.theme.font.family.h1};
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.sizes.large};
`;

const NavBar = () => {
  return (
    <NavStyled as='nav'
    justifyContent='space-between'>
      <Flex tabIndex="0">
        <ImageContainer width='50px'>
          <ImageStyled src={Logo} alt="Logo de Peliculas y Series App." />
        </ImageContainer>
        <MainTitle>MORIC PLAY</MainTitle>
      </Flex>
      <NavigationList />
    </NavStyled>
  );
};

export default NavBar;
