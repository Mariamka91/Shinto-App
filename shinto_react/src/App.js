import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import P5Canvas from './components/P5Canvas/index';

function App() {
  return (
    <div>
  <Navbar/>
  <P5Canvas/>
    </div>
  );
}

export default App;
