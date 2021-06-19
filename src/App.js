import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './styles/theme';

import ScrollToTop from './components/ScrollToTop';
import Home from './views/Home';
import Movies from './views/Movies';
import Categories from './views/Categories';
import ItemDetail from './views/ItemDetail';
import Series from './views/Series';
import Search from './views/Search';
import Person from './views/Person';
import PageNotFound from './views/PageNotFound';
import NavBar from './components/NavBar';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-weight: ${props => props.theme.font.fontWeight.thin};

  }

  body {        
    font-family: ${props => props.theme.font.family.all};
    color: ${props => props.theme.colors.textPrimary};
    background-color: ${props => props.theme.colors.bgPrimary};   
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie" component={Movies} />          
          <Route exact path="/search/:query/page/:pageNumber" component={Search} />          
          <Route exact path="/person/:id/:detail" component={Person} />
          <Route exact path="/:mediaType/:category/page/:pageNumber" component={Categories} />
          <Route exact path="/:mediaType/:id/:detail" component={ItemDetail} />         
          <Route exact path="/tv" component={Series} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>      
    </ThemeProvider>
  );
};

export default App;
