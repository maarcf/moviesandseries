import Loader from './Loader';
import CardsContainer from './CardsContainer';
import useFetch from '../hooks/useFetch';

const SimilarDetail = ({ mediaType, id }) => {  
  const {results: info, isLoading} = useFetch('', mediaType, id, 'similar');

  return(
    <>
      {
        isLoading
        ? <Loader />
        : info && <CardsContainer info={info} mediaType={mediaType} />
      }
    </>    
  );
};

export default SimilarDetail;
