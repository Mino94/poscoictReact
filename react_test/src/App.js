import React, { useEffect, useState, createContext, useContext } from "react";
import CountEffect from "./component/hooks/useEffect/CountEffect";

import './App.css';

import { ThemesContext } from "./component/themeTest/ThemeContext";
import { themes } from "./component/themeTest/Themes";

import Container from "./component/themeTest/Container";
import MemoContainer from "./component/MemoContainer";

function App() {
  // const [isDark, setIsDark] = useState(true);
  // const changeMode = () => {
  //   console.log(!isDark)
  //   setIsDark(!isDark);
  // };
  return (
    <div className="App">
      <header className='App-header'>
        {/* <ThemesContext.Provider value={{ themes: isDark ? themes.dark : themes.light, changeMode }}>
          <Container setIsDark={setIsDark} isDark={isDark}></Container>
        </ThemesContext.Provider> */}
        <MemoContainer></MemoContainer>
      </header>
    </div>
  );
}

export default App;
