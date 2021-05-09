import { useRouteMatch } from 'react-router-dom';

import DetailNavBar from '../components/DetailNavBar';

const MovieDetail = () => {
  const {path} = useRouteMatch();
  console.log("path", path)

  return(
    <>
      
      <div className="img-detail-section">
      </div>

      <DetailNavBar />

    </>
  )

}

export default MovieDetail;