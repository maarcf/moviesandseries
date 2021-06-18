import Loader from './Loader';
import PersonCard from './PersonCard';
import { Flex } from './Commons';
import useFetch from '../hooks/useFetch';

const CastDetail = ({ mediaType, id }) => {
  const {cast: info, isLoading} = useFetch('', mediaType, id, 'credits');

  return(
    <>
      {
        isLoading
        ? <Loader />
        : info && 
        <Flex flexWrap="wrap" alignItems="flex-start">
          {info.map(person => <PersonCard 
            key={person.id}
            name={person.name}
            id={person.id}
            profileImg={person.profile_path}
            character={person.character}          
          />)}
        </Flex>       
      }
    </>   
  )
};

export default CastDetail;