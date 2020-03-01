import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, withRouter} from 'react-router-dom';
import './BurgerMenu.css';

class BurgerMenu extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
     <div >
        <Menu isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>
            <Link onClick={() => this.closeMenu()} to="/">Home</Link>
            <Link onClick={() => this.closeMenu()} to="/aboutme">About</Link>
            <Link onClick={() => this.closeMenu()} to="/contactme">Contact</Link>
            <Link onClick={() => this.closeMenu()}to="/portfolio">Portfolio</Link>
        </ Menu>
      </div>
    );
  }
}

export default withRouter(BurgerMenu);

