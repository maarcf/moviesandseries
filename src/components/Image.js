import styled from 'styled-components';

import { Flex, ImageStyled, ImageContainer } from '../components/Commons';

const ImgContainer = styled(ImageContainer)`
overflow: hidden;
`;

const Img = styled(ImageStyled)`
transition: all 0.3s linear;

&:hover {
  transform: scale(1.2);
}
`;

const Title = styled.h3`
font-size: ${props => props.theme.sizes.medium};
margin-top: ${props => props.theme.spaces.small};
padding: 0 ${props => props.theme.spaces.small};

@media (max-width:${props => props.theme.breakpoints.small}) {
  font-size: ${props => props.theme.sizes.small};
}

@media (max-width:${props => props.theme.breakpoints.extraSmall}) {
  font-size: ${props => props.theme.sizes.medium};
}
`;

const Text = styled.p`
  font-size: ${props => props.theme.sizes.small};
  margin-bottom: ${props => props.theme.spaces.small};
  padding: 0 ${props => props.theme.spaces.small};
`;

const Image = ({ img, title, name, character }) => {
  return(
    <Flex as="article"
      flexDirection="column"
      alignItems="flex-start">
        <ImgContainer>
          <Img src={img} alt={title || name} />
        </ImgContainer>
        <Title>{title || name }</Title>
        <Text>{character}</Text>
    </Flex>
  )

}

export default Image;