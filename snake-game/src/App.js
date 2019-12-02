import React, { useState, useEffect } from 'react';
import Snake from './Snake'
import Food from './Food'
import './App.css';

function App() {
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0]
  ]);
  const [food, setFood] = useState([6, 8])

  return (
    <div className="game-area">
      <Snake snakeDots={snakeDots} />
      <Food dot={food} />
    </div>
  );
}

export default App;
