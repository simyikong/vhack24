import React, {useEffect, useState} from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {About} from "./pages/About";

const App = () => {

    const currentTheme = localStorage.getItem('current_theme');
    const[theme,setTheme]=useState(currentTheme?currentTheme:'light');

    useEffect(() => {
        localStorage.setItem('current_theme', theme);
    }, [theme]);
    return(
      <div className={`container ${theme}`}>
        <Navbar theme ={theme} setTheme={setTheme}/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </div>
  )
}

export default App;
