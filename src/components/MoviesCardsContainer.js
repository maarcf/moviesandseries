import styled from 'styled-components';
import TrendingFlatRoundedIcon from '@material-ui/icons/TrendingFlatRounded';

import { LinkStyled, Flex } from '../components/Commons';

import Card from './Card';

const CardsSection = styled(Flex)`
  margin-bottom: ${props => props.theme.spaces.medium};
`;

const TitleStyled = styled.h2`
  font-size: ${props => props.theme.sizes.large};
  margin-right: ${props => props.theme.spaces.medium};

  @media (max-width:${props => props.theme.breakpoints.small}) {
    font-size: ${props => props.theme.sizes.medium};
    margin-right: ${props => props.theme.spaces.small};
  }
`;

const CardsContainer = styled(Flex)`

`;

const MoviesCardsContainer = ({ title, mediaType, category, info }) => {
  return(
    <CardsSection as="section" 
      flexDirection="column"
      alignItems="flex-start">
      <LinkStyled to={`/${mediaType}/${category}/page/1`}
        justifyContent="space-between">
        <TitleStyled>{ title }</TitleStyled>
        <TrendingFlatRoundedIcon fontSize="large"/>
      </LinkStyled>
      <CardsContainer flexWrap="wrap" alignItems="flex-start">
        {info && 
          info.map(element => <Card 
            key={element.id}
            title={element.title} 
            name={element.name}
            id={element.id}
            poster_path={element.poster_path}
            mediaType={element.media_type}
            />
          )
        }
      </CardsContainer>
    </CardsSection>
  )

}

export default MoviesCardsContainer;