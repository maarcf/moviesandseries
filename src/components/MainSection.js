import styled from 'styled-components';
import TrendingFlatRoundedIcon from '@material-ui/icons/TrendingFlatRounded';
import { useLocation } from 'react-router-dom'

import { cutArray } from '../utils/variables';
import { LinkStyled, Flex, SectionTitle } from './Commons';
import CardsContainer from './CardsContainer';


const CardsSection = styled(Flex)`
  margin-bottom: ${props => props.theme.spaces.medium};
`;  

const MainSection = ({ title, mediaType, category, info }) => {
  const { pathname } = useLocation();
  const isFirstView = (pathname === '/' 
  || pathname === '/movie' || pathname === '/tv');

  return(
    <CardsSection as="main" 
      flexDirection="column"
      alignItems="flex-start">
        { isFirstView 
          ? <LinkStyled to={`/${mediaType}/${category}/page/1`}>
              <Flex justifyContent="space-between">
                <SectionTitle>{ title }</SectionTitle>
                <TrendingFlatRoundedIcon fontSize="large"/>
              </Flex>
            </LinkStyled>
          : <SectionTitle>{ title }</SectionTitle> 
        }

        { isFirstView
          ? <CardsContainer info={cutArray([...info], 5)} mediaType={mediaType}/> 
          : <CardsContainer info={info} />
        }      
    </CardsSection>
  )
};

export default MainSection;