import React from 'react';
import BurgerMenu from './BurgerMenu';
import Main from './webPages/Main';
import DarkModeToggle from './darkModeToggle/DarkModeToggle';
import './Header.css';


class Header extends React.Component{


      render() {
        return(
            <div>
                <div className="header">
                    <BurgerMenu className="burgerMenu" />
                    <DarkModeToggle className="darkModeToggle" />
                </div>
                <div>
                    <Main />
                </div>
            </div>
        );
      }
};

export default Header;
