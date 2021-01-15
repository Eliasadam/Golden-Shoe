import React from 'react';
import SearchComponent from '../SearchComponent';
import ShoppingBasket from './ShoppingBasket';
import { HeaderNav, HeaderUl, HeaderList } from './HeaderStyle';

const Header = ({ query, HandleChange }) => {
  const navList = ['New Release ', 'Men', 'Women', 'Unisex', 'Kids', 'Sale'];
  
  const navBarList = navList.map((val, index) => {
    const uniqueKey = `${val}${index}`;
    return <HeaderList key={uniqueKey}>{val}</HeaderList>;
  });
  return (
    <HeaderNav className="header-nav">
      <HeaderUl>{navBarList}</HeaderUl>
      <SearchComponent query={query} HandleChange={HandleChange} />
      <ShoppingBasket/>
    </HeaderNav>
  );
};

export default Header;
