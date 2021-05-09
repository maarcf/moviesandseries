
import { Link, useParams } from 'react-router-dom';

import Card from '../components/Card';

const MoviesCategory = () => {
  
  const params = useParams();
  

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
        <Link className="link-style" to="/movies/0001/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0002/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0003/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0001/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0004/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0005/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0006/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0007/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0008/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0009/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0010/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0011/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0012/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0013/info">
          <Card />
        </Link>
      </section>
    </main>
  );
};

export default MoviesCategory;
