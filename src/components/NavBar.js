import styled from 'styled-components';

import NavigationList from './NavigationList';
import SearchForm from './SearchForm';
import { Flex, ImageContainer, ImageStyled, LinkStyled } from './Commons';

import Logo from '../utils/img/logo.png';

const NavStyled = styled(Flex)`
  width: 100%;
  background-color: ${props => props.theme.colors.bgSecondary};
  padding: ${props => props.theme.spaces.extraSmall} 
  ${props => props.theme.spaces.small};

  @media (max-width:${props => props.theme.breakpoints.extraSmall}) {
    justify-content: center;
  }
`;

const LogoContainer = styled(ImageContainer)`
  @media (max-width:${props => props.theme.breakpoints.small}) {
    width: 40px;
  }
`;

const Title = styled.h1`
  font-size: ${props => props.theme.sizes.small};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 4px;
`;

const LinkLogo =styled(LinkStyled)`
  margin-right: ${props => props.theme.spaces.extraSmall};

  @media (max-width:${props => props.theme.breakpoints.extraSmall}) {
    display: none;
  }
`;

const NavBar = () => {
  return (
    <NavStyled as='nav'
    justifyContent='space-between'>
      <Flex>        
        <LinkLogo to="/" flexDirection="column" >
          <Title>MC PLAY</Title>
          <LogoContainer width='50px'>
            <ImageStyled src={Logo} alt="Logo de Peliculas y Series App." />
          </LogoContainer>          
        </LinkLogo>
        <NavigationList />
      </Flex>
      
      <SearchForm />
      
    </NavStyled>
  );
};

export default NavBar;
