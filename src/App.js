import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes}
  from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Edit from './Edit';
import useLocalStorage from 'use-local-storage';

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  function switchTheme(){
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div className="App" data-theme={theme}>
      <label className='Switch'>
        <input type="checkbox"
        onClick={() => switchTheme()}/>
        <span className='slider'></span>
      </label>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Create' element={<Create/>}/>
          <Route path='/Edit' element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
