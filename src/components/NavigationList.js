import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MovieIcon from '@material-ui/icons/Movie';
import MovieOutlinedIcon from '@material-ui/icons/MovieOutlined';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';

import { ListStyled } from './Commons';

import ItemList from "./ItemList";

const NavigationList = () => {
  console.log('home', HomeIcon);
  return(
    <ListStyled>
      <ItemList path="/" iconFilled={<HomeIcon />} iconOutlined={<HomeOutlinedIcon />} />

      <ItemList path="/movie" iconFilled={<MovieIcon />} iconOutlined={<MovieOutlinedIcon />} />

      <ItemList path="/tv" iconFilled={<LiveTvIcon />} iconOutlined={<LiveTvOutlinedIcon />} />
    </ListStyled>
  );

};

export default NavigationList;