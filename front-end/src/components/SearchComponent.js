import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

const SearchWrapper = styled.div`
display: flex;
flex-direction: row;
height: 35;
width: 400;
align-items: center;
justify-content: space-between;
background-color: white;
border-radius: 10px;

`;

const SearchInput = styled.input`
border-color: white;
outline: none;
border: none;
border-radius: 10px 0 0 10px;

`;



const SearchComponent = ({ search, HandleChange }) => {
  return (
    <div>
      <SearchWrapper>
        <SearchInput
          value={search}
          placeholder="e.g Trainers ..."
          onChange={HandleChange}/>
        <SearchIcon size={5}/>
      </SearchWrapper>
      {/* <ShoppingCartIcon color="white"/> */}
    </div>
    
  );
};

export default SearchComponent;
