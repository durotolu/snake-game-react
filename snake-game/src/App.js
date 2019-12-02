import React, { useState, useEffect } from 'react';
// import Snake from './Snake'
// import Food from './Food'
import './App.css';

function App() {

  return (
    <div className="game-area">
      <div className="snake-dot" style={{top:0, left:0}}></div>
      <div className="snake-dot" style={{top:0, left:'2%'}}></div>
      <div className="snake-dot" style={{top:0, left:'4%'}}></div>
    </div>
  );
}

export default App;
