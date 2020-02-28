import React from 'react';
import DarkModeStatus from './DarkModeStatus';
import DarkModeCommands from './DarkModeCommands';
import DarkModeToggle from './DarkModeToggle';

//Dark Mode Button containing all part of the button
//Dark Mode Toggle is the actual useful part of this
//Dark Mode Status is a nice add-on can keep it for now
//Dark Mode Commands is kinda useless, but it allows for a text link to turn on and off darkmode
const DarkModeButton = () => (
  <div className="content">
    <p>
      <DarkModeToggle />
    </p>
    <p>
      It is reporting that the current mode is:{' '}
      <code>
        <DarkModeStatus />
      </code>
    </p>
    <p>
      And here's another: <DarkModeCommands />
    </p>
  </div>
);

export default DarkModeButton;
