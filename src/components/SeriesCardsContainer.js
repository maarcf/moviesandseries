import { Link } from 'react-router-dom';

import Card from './Card';

const SeriesCardsContainer = ({ title }) => {
  return(
    <main>
      <h2>{title}</h2>

      <section>
        {/*El id sería info que llega desde la api.*/}
        <Link className="link-style" to="/series/0001/info">
          <Card />
        </Link>

        <Link className="link-style" to="/series/0002/info">
          <Card />
        </Link>

        <Link className="link-style" to="/series/0003/info">
          <Card />
        </Link>

        <Link className="link-style" to="/series/0004/info">
          <Card />
        </Link>

        <Link className="link-style" to="/series/0005/info">
          <Card />
        </Link>
      </section>
    </main>
  )

}

export default SeriesCardsContainer;