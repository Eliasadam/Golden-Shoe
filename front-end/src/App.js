import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
 
} from 'react-router-dom';
// import Header from './components/Header/Header';
import SearchComponent from './components/SearchComponent';
import ShoppingBasket from './components/Header/ShoppingBasket';
import Men from './components/Header/Men';
import Kids from './components/Header/Kids';
import Sale from './components/Header/Sale';
import Unisex from './components/Header/Unisex';
import Women from './components/Header/Women';
import NewRelease from './components/Header/NewRelease';
import { HeaderNav, HeaderUl, HeaderList, AnchorItem  } from './components/Header/HeaderStyle';
import ProductContents from './components/ProductContents/ProductContents';
import  {GlobalProvider}  from './Contexts/GlobalState';


const App = () => {
  
  return (
    <Router>
    <GlobalProvider>
      <div data-testid="app">
      
        
          <HeaderNav>
        <HeaderUl>
          <HeaderList><AnchorItem  to="/newRelease">NewRelease</AnchorItem></HeaderList>
          <HeaderList><AnchorItem  to="/men">Men</AnchorItem></HeaderList>
          <HeaderList><AnchorItem  to="/women">Women</AnchorItem></HeaderList>
          <HeaderList><AnchorItem  to="/unisex">Unisex</AnchorItem></HeaderList>
          <HeaderList><AnchorItem  to="/kids">Kids</AnchorItem></HeaderList>
          <HeaderList><AnchorItem  to="/sale">Sale</AnchorItem></HeaderList>
          <SearchComponent />
          <ShoppingBasket /> 
            </HeaderUl>
      </HeaderNav>
          <Switch>
            <Route exact path="/">
              <ProductContents />
            </Route>
            <Route path="/newRelease">
              <NewRelease />
            </Route>
            <Route path="/men">
              <Men />
            </Route>
            <Route path="/women">
              <Women />
            </Route>
            <Route path="/unisex">
              <Unisex />
            </Route>
            <Route path="/kids">
              <Kids />
            </Route>
            <Route path="/sale">
              <Sale />
            </Route>
          </Switch>
        
      </div>
      </GlobalProvider>
      </Router>
  );
};

export default App;

