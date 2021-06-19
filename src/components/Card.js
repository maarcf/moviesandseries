import styled from 'styled-components';

import { LinkStyled } from '../components/Commons';
import { BASE_IMG_URL } from '../utils/variables';
import Image from './Image';
import PersonCard from './PersonCard';
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

const Card = ({ title, name, id, posterImg, mediaType, profileImg }) => {

  const image = posterImg ? `${BASE_IMG_URL + posterImg}` : NoImage;

  return(
    <>
      { 
        mediaType === 'person'
        ? <PersonCard profileImg={profileImg} name={name} />
        : <LinkSt to={`/${mediaType}/${id}/info`}>
            <Image img={image} title={title} name={name} />
          </LinkSt>         
      }
    </>       
  );
};

export default Card;