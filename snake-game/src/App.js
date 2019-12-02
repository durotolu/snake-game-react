import React, { useState, useEffect } from 'react';
import Snake from './Snake'
// import Food from './Food'
import './App.css';

function App() {
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0]
  ])

  return (
    <div className="game-area">
      <Snake snakeDots={snakeDots} />
    </div>
  );
}

export default App;
