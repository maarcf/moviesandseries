
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/movies" component={Movies} />
      <Route exact path="/movies/:category/page/:pageNumber" component={MoviesCategory} />
      <Route exact path="/movies/:id/info" component={MovieDetail} />
      <Route exact path="/series" component={Series} />
      <Route exact path="/series/:category/page/:pageNumber" component={SeriesCategory} />
      <Route exact path="/series/:id/info" component={SerieDetail} />
      <Route exact path="/search/:query/page/:pageNumber" component={Search} />
      <Route component={PageNotFound} />
    </BrowserRouter>
  );
}

export default App;
