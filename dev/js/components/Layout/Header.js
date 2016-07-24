import React from 'react';
import NavBar from '../NavBar';
import LeftNavBar from '../LeftNavBar';


const Header = () => (
    <header className="header-main">
      <div className="logo"><i className="material-icons">&#xE0BC;</i></div>
      <NavBar />
      <LeftNavBar />
    </header>
);

export default Header;
