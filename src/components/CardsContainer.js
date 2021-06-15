import { Flex } from '../components/Commons';
import Card from './Card';

const CardsContainer = ({ info, mediaType }) => {
  return(
    <Flex flexWrap="wrap" alignItems="flex-start">
      {info && 
        info.map(element => <Card 
          key={element.id}
          title={element.title} 
          name={element.name}
          id={element.id}
          poster_path={element.poster_path}
          mediaType={element.media_type || mediaType}
          />
        )
      }
    </Flex>
  )
};

export default CardsContainer;