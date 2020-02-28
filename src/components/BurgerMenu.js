import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter} from 'react-router-dom';
import './BurgerMenu.css';

class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }


  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
     <div style={{height: 100, overflow: 'hidden'}}>
        <Menu id="slide">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/aboutme">About</Link>
            <Link to="/contactme">Contact</Link>
            <Link to="/portfolio">Portfolio</Link>
        </Menu>
      </div>
    );
  }
}

export default withRouter(BurgerMenu);

