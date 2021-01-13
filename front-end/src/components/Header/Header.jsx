import React from 'react';
import SearchComponent from '../SearchComponent';
import ShoppingBasket from './ShoppingBasket';
import './Header.css';

const Header = ({ query, HandleChange }) => {
  const navList = ['New Release ', 'Men', 'Women', 'Unisex', 'Kids', 'Sale'];
  
  const navBarList = navList.map((val, index) => {
    const uniqueKey = `${val}${index}`;
    return <li key={uniqueKey}>{val}</li>;
  });
  return (
    <div className="header-nav">
      <ul>{navBarList}</ul>
      <SearchComponent query={query} HandleChange={HandleChange} />
      <ShoppingBasket/>
    </div>
  );
};

export default Header;
