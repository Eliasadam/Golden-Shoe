import React from 'react';
import Header from './components/Header';
import './App.css';

const App = () => {
  const title = 'Golden Shoe';
  const navList = ['Home', 'Products', 'My Accounts', 'About', 'Contact'];
  return (
    <div className="App">
      <Header navList={navList} />
      <h1>{title}</h1>
    </div>
  );
};

export default App;
