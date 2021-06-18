import styled from 'styled-components';

import { Flex, SectionTitle, ImageStyled, ImageContainer } from '../components/Commons';
import { BASE_IMG_URL, noInfo } from '../utils/variables';
import NoImage from '../utils/img/no-image.png';

const Section = styled(Flex)`
  margin-bottom: ${props => props.theme.spaces.medium};
  @media (max-width:${props => props.theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImgContainer = styled(ImageContainer)`
  margin-right: ${props => props.theme.spaces.medium};
  flex: 1;

  @media (max-width:${props => props.theme.breakpoints.medium}) {
    margin-right: 0;
    margin-bottom: ${props => props.theme.spaces.medium};
  }
`;

const InfoContainer = styled(Flex)`
  max-width: 500px;
  flex: 2;
`;

const Title = styled(SectionTitle)`
  margin: 0;
  margin-bottom: ${props => props.theme.spaces.small};
  font-weight: ${props => props.theme.font.fontWeight.semiBold};
`;

const Text = styled.p`
  font-size: ${props => props.theme.sizes.small};
  margin-bottom: ${props => props.theme.spaces.small};
`;

const InfoDetail = ({ mediaType, info }) => {
  const image = info.poster_path ? `${BASE_IMG_URL + info.poster_path}` : NoImage;

  const genres = info.genres && info.genres
  .map(genre => genre.name)
  .join(', ');

  const company = info.production_companies && info.production_companies
  .map(company => company.name)
  .join(', ');

  const budget = info.budget && info.budget.toLocaleString('en-US');
  const revenue = info.revenue && info.revenue.toLocaleString('en-US');

  return(
    <Section as="section"
      justifyContent="space-between" 
      alignItems="flex-start">
        {info &&
        <ImgContainer width="300px">
          <ImageStyled src={image} alt={info.title || info.name} />
        </ImgContainer>}
        {
          info 
          && mediaType === 'movie' 
          && <InfoContainer flexDirection="column" alignItems="flex-start">
              <Title>{info.title || noInfo}</Title>
              <Text>Puntaje: {info.vote_average || noInfo}</Text>
              <Text>{info.overview || noInfo}</Text>
              <Text>Duración: {info.runtime + ' min.' || noInfo}</Text>
              <Text>Géneros: {genres || noInfo}</Text>
              <Text>Presupuesto: {'USD ' + budget || noInfo}</Text>
              <Text>Recaudación: {'USD ' + revenue || noInfo}</Text>          
              <Text>Producción: {company || noInfo}</Text>
          </InfoContainer>
        }
        {
          info 
          && mediaType === 'tv' 
          && <InfoContainer flexDirection="column" alignItems="flex-start">
              <Title>{info.name || noInfo}</Title>
              <Text>Puntaje: {info.vote_average || noInfo}</Text>
              <Text>{info.overview || noInfo}</Text>
              <Text>Temporadas: {info.number_of_seasons || noInfo}</Text>
              <Text>Episodios: {info.number_of_episodes || noInfo}</Text>              
              <Text>Duración: {info.episode_run_time + ' min.' || noInfo}</Text>   
              <Text>Géneros: {genres || noInfo}</Text>       
              <Text>Producción: {company || noInfo}</Text>
          </InfoContainer>
        }

    </Section>
  )
}

export default InfoDetail;