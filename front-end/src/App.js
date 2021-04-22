import React from 'react';
import Header from './components/Header/Header';
import ProductContents from './components/ProductContents/ProductContents';
import  {GlobalProvider}  from './Contexts/GlobalState';

const App = () => {
  
  return (
    <GlobalProvider>
      <div  data-testid="app">
        <Header />
        <ProductContents />
        </div>
       </GlobalProvider>
  );
};

export default App;
