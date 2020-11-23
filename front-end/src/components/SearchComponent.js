import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const SearchComponent = ({ search, HandleChange }) => {
  return (
    <div className="searchForm">
      <TextField
        variant="outlined"
        value={search}
        placeholder="e.g Trainers ..."
        onChange={HandleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchComponent;
