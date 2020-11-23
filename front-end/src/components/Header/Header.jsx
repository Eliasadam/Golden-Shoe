import React from 'react';
import SearchComponent from '../SearchComponent';
import './Header.css';

const Header = ({ navList, query, HandleChange }) => {
  
  const navBarList = navList.map((val, index) => {
    const uniqueKey = `${val}${index}`;
    return <li key={uniqueKey}>{val}</li>;
  });
  return (
    <div className="header-nav">
      <ul>{navBarList}</ul>
      <SearchComponent query={query} HandleChange={HandleChange} />
    </div>
  );
};

export default Header;
