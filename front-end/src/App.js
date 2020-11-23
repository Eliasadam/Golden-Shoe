import React, {useState} from 'react';
import Header from './components/Header/Header';
import ProductContents from './components/ProductContents/ProductContents';
import shoeCatalogueList from './components/Data/ShoeCatalogueList';
import './App.css';

const App = () => {
  const [query, setQuery] = useState(shoeCatalogueList);
  const [search, setSearch] = useState('');

    
  
  
  const HandleChange = (event) => {
    const filteredProduct = shoeCatalogueList
      .filter((items) => items.title.toLowerCase().includes(search));
   
    setQuery( filteredProduct);
    setSearch(event.target.value);
  };

  const navList = ['New Release ', 'Men', 'Women', 'Unisex', 'Kids', 'Sale'];


  return (
    <div className="App">
      <Header navList={navList}
        search={search}
        HandleChange={HandleChange}
      />
      <ProductContents
        query={query}
      />
    </div>
  );
};

export default App;
