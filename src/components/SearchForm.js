import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import { Flex } from './Commons';

const Form = styled.form`
  display: flex;
`;

const InputLabel = styled.label`
  position: relative;
  color: ${props => props.theme.colors.textPrimary};
`;

const InputSearch = styled.input`
  background-color: ${props => props.theme.colors.bgPrimary};
  color: ${props => props.theme.colors.textPrimary};
  font-size: ${props => props.theme.sizes.medium};
  border: none;
  border-radius: 50px;
  padding: 12px 12px 12px 50px; 

  &::placeholder {
    color: ${props => props.theme.colors.textPrimary};
  }

  @media (max-width:${props => props.theme.breakpoints.small}) {
    font-size: ${props => props.theme.sizes.small};
    padding: 10px 8px 10px 40px;
  }
`;

const IconContainer = styled(Flex)`
  position: absolute;
  top: 7px;
  left: 12px;

  svg {
    font-size: ${props => props.theme.sizes.large};
  }

  @media (max-width:${props => props.theme.breakpoints.small}) {
    top: 3px;
    left: 7px;
  }
`;


const SearchForm = () => {
  const [ query, setQuery ] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(query);
    history.push(`/search/${query}/page/1`);
    setQuery('');
  };

  return(
    <Form onSubmit={handleSubmit}>
      <InputLabel htmlFor="input-search">
        <InputSearch 
          type="search" 
          placeholder="Ingresá tu búsqueda" 
          id="search-input"
          value={query} 
          onChange={e => setQuery(e.target.value)}
        />

        <IconContainer>
          <SearchRoundedIcon />
        </IconContainer>
      </InputLabel>
    </Form>
  );
};

export default SearchForm;