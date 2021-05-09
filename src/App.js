
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './views/Home';
import Movies from './views/Movies';
import MoviesCategory from './views/MoviesCategory';
import MovieDetail from './views/MovieDetail';
import Series from './views/Series';
import SeriesCategory from './views/SeriesCategory';
import SerieDetail from './views/SerieDetail';
import Search from './views/Search';
import PageNotFound from './views/PageNotFound';
import NavBar from './components/NavBar';

import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movies/:category/page/:pageNumber" component={MoviesCategory} />
        <Route exact path="/movies/:id/info" component={MovieDetail} />
        {/*Esto es repetitivo, pensar un solo componente genérico. En vez de separar movies y series
         porque son componentes y rutas iguales en estructura.*/}
        <Route exact path="/series" component={Series} />
        <Route exact path="/series/:category/page/:pageNumber" component={SeriesCategory} />
        <Route exact path="/series/:id/info" component={SerieDetail} />
        <Route exact path="/search/:query/page/:pageNumber" component={Search} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
