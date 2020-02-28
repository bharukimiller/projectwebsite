import React from 'react';
import BurgerMenu from './BurgerMenu';
import Main from './webPages/Main';
import DarkModeToggle from './darkModeToggle/DarkModeToggle';
import './Header.css';

const Header = () => {
    return(
        <div className="header">
            <BurgerMenu className="burgerMenu"/>
            <Main />
            <DarkModeToggle className="darkMode"/>
        </div>
        
    );
};

export default Header;
