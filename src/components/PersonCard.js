import styled from 'styled-components';

import { Flex } from '../components/Commons';
import { BASE_IMG_URL } from '../utils/variables';
import Image from './Image';
import NoImage from '../utils/img/no-image.png';

const PersonContainer = styled(Flex)`
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

const PersonCard = ({ name, profileImg, character }) => {
  const image = profileImg ? `${BASE_IMG_URL + profileImg}` : NoImage;

  return(
    <PersonContainer>
      <Image img={image} name={name} character={character}/>
    </PersonContainer>    
  );
};

export default PersonCard;