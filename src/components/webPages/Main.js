import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Portfolio from './Portfolio';
import Contact from './Contact';
import About from './About';

//Main router component
const Main = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contactme" component={Contact} />
                <Route path="/aboutme" component={About} />
            </Switch>
        </div>
    );
}

export default Main;