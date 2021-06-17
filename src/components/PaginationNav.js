import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { esES } from '@material-ui/core/locale';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from 'react-router';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(225, 225, 225, 0.6)',
    },

    text: {
      primary:'#E1E1E1',
    },
  },
}, esES);

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(12),
    },    
  },
}));

const PaginationNav = ({ totalPages = 1, setPage }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (e, page) => {
    setPage(page);
    history.push(`${page}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Pagination count={totalPages} shape="rounded" 
        color="primary" onChange={handleChange} />
      </div>
    </ThemeProvider>
  );
};

export default PaginationNav;
