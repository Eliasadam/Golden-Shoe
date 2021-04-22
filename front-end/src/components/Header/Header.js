import React from 'react';
import SearchComponent from '../SearchComponent';
import ShoppingBasket from './ShoppingBasket';
import { HeaderNav, HeaderUl } from './HeaderStyle';
import Men from './Men';
import Kids from './Kids';
import Sale from './Sale';
import Unisex from './Unisex';
import Women from './Women';
import NewRelease from './NewRelease';


const Header = () => {
  
  return (
    <HeaderNav className="header-nav">
     
      <HeaderUl>
        <NewRelease />
        <Men />
        <Women />
        <Unisex />
        <Kids />
        <Sale />
      </HeaderUl>
      <SearchComponent />
      <ShoppingBasket/>
    </HeaderNav>
  );
};

export default Header;
