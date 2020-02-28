import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';


//Dark Mode Toggle using a nice UI sliding button
const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾ 
      </button>
    </div>
  );
};

export default DarkModeToggle;
