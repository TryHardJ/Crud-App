import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes}
  from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
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
