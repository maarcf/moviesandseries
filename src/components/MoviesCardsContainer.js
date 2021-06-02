import { Link } from 'react-router-dom';

import Card from './Card';

const MoviesCardsContainer = ({ title }) => {
  console.log('Soy MoviesCardsContainer y tiro un error en consola sobre el <a>. Revisarme luego!')
  return(
    <main>
      <h2>{title}</h2>

      <section>
        {/*El id sería info que llega desde la api.*/}
        <Link className="link-style" to="/movies/0001/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0002/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0003/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0004/info">
          <Card />
        </Link>

        <Link className="link-style" to="/movies/0005/info">
          <Card />
        </Link>
      </section>
    </main>
  )

}

export default MoviesCardsContainer;