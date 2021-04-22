import React, {useContext} from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {GlobalContext} from '../Contexts/GlobalState';

const SearchWrapper = styled.div`
display: flex;
flex-direction: row;
height: 35;
width: 400;
align-items: center;
justify-self: flex-end;
background-color: white;
border-radius: 10px;
margin-left: 110px;

`;

const SearchInput = styled.input`
border-color: white;
outline: none;
border: none;
border-radius: 10px 0 0 10px;`;



const SearchComponent = () => {
  const { search, setSearch, query, setQuery }= useContext(GlobalContext);

  const HandleChange = (event) => {
    event.preventDefault();
    const filteredProduct = query? 
    query.filter((items) => items.title.toLowerCase().includes(search)): [];
   
    setQuery( filteredProduct);
    setSearch(event.target.value);
  };
  return (
    <div>
      <SearchWrapper>
        <SearchInput
          value={search}
          placeholder="e.g Trainers ..."
          onChange={HandleChange}/>
        <SearchIcon size={5}/>
      </SearchWrapper>
    </div>
    
  );
};

export default SearchComponent;
