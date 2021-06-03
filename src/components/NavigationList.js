import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import LiveTvIcon from '@material-ui/icons/LiveTv';

import { ListStyled } from './Commons';

import ItemList from "./ItemList";

const NavigationList = () => {
  console.log('home', HomeIcon);
  return(
    <ListStyled>
      <ItemList path="/" icon={<HomeIcon />} />

      <ItemList path="/movie" icon={<MovieIcon />} />

      <ItemList path="/tv" icon={<LiveTvIcon />} />
    </ListStyled>
  );

};

export default NavigationList;