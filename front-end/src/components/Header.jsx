import React from 'react';
import './Header.css';

const Header = ({ navList }) => {
  const navListContents = navList.map((val) => {
    return <li key={val.index}>{val}</li>;
  });
  return (
    <div className="header-nav">
      <ul>{navListContents}</ul>
    </div>
  );
};

export default Header;