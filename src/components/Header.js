import React from 'react';
import BurgerMenu from './BurgerMenu';
import Main from './webPages/Main';
import DarkModeToggle from './darkModeToggle/DarkModeToggle';
import './Header.css';

const Header = () => {
    return(
    <div>
        <div className="header">
            <BurgerMenu className="burgerMenu" />
            <DarkModeToggle className="darkMode" />
        </div>
        <div>
            <Main />
        </div>
    </div>
    );
};

export default Header;
