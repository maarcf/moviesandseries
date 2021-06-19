import styled from 'styled-components';

import { Flex, LinkStyled, ImageContainer, ImageStyled } from '../components/Commons';

const Page404 = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.spaces.large};

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    margin: ${props => props.theme.spaces.large} ${props => props.theme.spaces.medium};
  }

  @media (max-width:${props => props.theme.breakpoints.small}) {
    flex-direction:column;
  }
`;

const TextContainer = styled(Flex)`
  width: 550px;
  margin: 0 ${props => props.theme.spaces.small} 
  ${props => props.theme.spaces.large}; 
    
  @media (max-width:${props => props.theme.breakpoints.large}) {
    width: 350px;
  }

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    width: 180px;
  }

  @media (max-width:${props => props.theme.breakpoints.small}) {
    width: 100%;
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spaces.large};
  font-size: 48px;
  font-weight: ${props => props.theme.font.fontWeight.bold};

  @media (max-width:${props => props.theme.breakpoints.large}) {
    font-size: 40px;
  }

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    font-size: ${props => props.theme.sizes.large};
    position: relative;
    left: 40%;
    width: 300px;
  }

  @media (max-width:${props => props.theme.breakpoints.small}) {
    left: 0;      
    margin-bottom: ${props => props.theme.spaces.medium};
  }

  @media (max-width:${props => props.theme.breakpoints.extraSmall}) {
    font-size: 26px;
  }
`;

const ReturnToHome = styled(LinkStyled)`
  background-color: ${props => props.theme.colors.textSecondary};
  padding: 15px 25px;
  border-radius: 10px;
  text-shadow: 2px 2px 2px ${props => props.theme.colors.bgSecondary};

  &:hover {
    color: ${props => props.theme.colors.bgSecondary};
    background-color: ${props => props.theme.colors.textPrimary};
    text-shadow: none;
    box-shadow: 2px 3px 5px 2px rgba(104, 222, 135, .8);
  }
`;

const ImgContainer = styled(ImageContainer)` 
  position:relative;
  bottom: -90px;

  @media (max-width:${props => props.theme.breakpoints.large}) {
    width: 350px;
  }

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    width: 280px;      
    bottom: -70px;
  }

  @media (max-width:${props => props.theme.breakpoints.extraSmall}) {
    font-size: 26px;
    width: 230px;
  }
`; 

const PageNotFound = () => { 
  return(
    <Page404 as="section" justifyContent="space-between">
      <TextContainer flexDirection="column">
        <Title>Oops... la página que estás buscando no existe.</Title>
        <ReturnToHome to="/">Volver al Inicio</ReturnToHome>
      </TextContainer>
      
      <ImgContainer width="500px">
        <ImageStyled src="https://media0.giphy.com/media/jWexOOlYe241y/giphy.webp?cid=790b761147b7573dc7bbac3b683d57350885c52f96016361&rid=giphy.webp&ct=s" alt="John Travolta sin saber a dónde ir." />  
      </ImgContainer>
    </Page404>
  );
};

export default PageNotFound;