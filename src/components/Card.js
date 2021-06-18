import styled from 'styled-components';

import { LinkStyled, Flex, ImageStyled, ImageContainer } from '../components/Commons';
import { BASE_IMG_URL } from '../utils/variables';
import NoImage from '../utils/img/no-image.png';

const LinkSt = styled(LinkStyled)`
  width: calc(20%);
  padding: 5px;
  margin: ${props => props.theme.spaces.small} 0;

  @media (max-width:${props => props.theme.breakpoints.large}) {
    width: calc(25%);
  }

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    width: calc(33.33%);
  }
  
  @media (max-width:${props => props.theme.breakpoints.small}) {
    width: calc(50%);
  }

  @media (max-width:${props => props.theme.breakpoints.extraSmall}) {
    width: calc(100%);
  }
`;

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

const Card = ({ title, name, id, poster_path, mediaType }) => {

  const image = poster_path ? `${BASE_IMG_URL + poster_path}` : NoImage;

  return(
    <LinkSt to={`/${mediaType}/${id}/info`}>
      <Flex as="article"
        flexDirection="column"
        alignItems="flex-start">
          <ImgContainer>
            <Img src={image} alt={title || name} />
          </ImgContainer>
          <Title>{title || name }</Title>
      </Flex>
    </LinkSt>    
  )
};

export default Card;