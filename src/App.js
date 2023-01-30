import React, {useState} from 'react';

import Header from './Component/Header/header.js';
import Keypad from './Component/Keypad/keypad.js';

import moonIcon from'./assets/moon.png';
import sunIcon from'./assets/sun.png';

import './App.css';

function App() {
  const[isDarkMode, setIsDarkMode]=useState(false);
  return (
    <div className="app" data-theme={isDarkMode ? "dark":""}>
      <div className="app_calculator">
        <div className="app_calculator_navibar">
          <div className="app_calculator_navibar_toggle"
          onClick={()=>setIsDarkMode(!isDarkMode)}>
            <div className={`app_calculator_navibar_toggle_circle ${isDarkMode ? "app_calculator_navibar_toggle_circle_active" : ""}`}/>
          </div>
          <img src={isDarkMode ? moonIcon:sunIcon} alt="mode"/>
        </div>
        <Header/>
        <Keypad/>
      </div>
    </div>
  );
}

export default App;
