
import { Link, useParams } from 'react-router-dom';

import Card from '../components/Card';

const MoviesCategory = () => {
  
  const params = useParams();
  console.log(params)
  

  const categories = {
    popular: "Movies Populares",
    top_rated: "Movies Mejores Puntuadas",
    upcoming: "Movies A estrenarse",
    now_playing: "Movies En el cine",
    trending: "Movies Tendencia"
  }

  const getCategory = () => {
    for (const prop in categories) {
      if (prop === params.category) {
        return categories[prop];        
      }
    }
  }

  return (
    <main>
      
      <h2>{getCategory()}</h2>

      <section>
        <Link className="link-style" to="/movie/0001/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0002/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0003/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0001/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0004/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0005/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0006/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0007/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0008/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0009/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0010/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0011/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0012/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movie/0013/info">
          <Card />
        </Link>
      </section>
    </main>
  );
};

export default MoviesCategory;