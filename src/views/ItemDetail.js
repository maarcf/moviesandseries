import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Flex, ImageContainer } from '../components/Commons';
import DetailNavBar from '../components/DetailNavBar';
import Loader from '../components/Loader';
import NoImage from '../utils/img/no-image-text.png';
import useFetch from '../hooks/useFetch';

const Hero = styled(ImageContainer)`
  width: 100%;
  height: 600px;
  background-color: ${props => props.theme.colors.bgSecondary};
  opacity: 0.6;

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    height: 450px;
  }

  @media (max-width:${props => props.theme.breakpoints.small}) {
    height: 300px;
  }
`;

const HeroImage = styled(Flex)`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-position: center center;
`;

const Main = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.spaces.medium}
  ${props => props.theme.spaces.medium}
  ${props => props.theme.spaces.large};
`;

const ItemDetail = () => { 

  const { mediaType, id } = useParams();
  const info = useFetch('', mediaType, id);
  const { backdrop_path, isLoading } = info;
  
  const image = backdrop_path 
    ? `https://image.tmdb.org/t/p/original${backdrop_path}` 
    : NoImage;

  return(
    <>
      { 
        isLoading
        ? <Loader />
        : info && 
        <>
          <Hero>
            <HeroImage imageSrc={image}  />
          </Hero>

          <Main as="main" flexDirection="column"
            justifyContent="center">      
          
            <DetailNavBar mediaType={mediaType} id={id} info={info} />            
          </Main>
        </>
      }

      
    </> 
  )
};

export default ItemDetail;