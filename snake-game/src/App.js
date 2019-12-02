import React, { useState, useEffect } from 'react';
import Snake from './Snake'
import Food from './Food'
import './App.css';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;

  return [x, y]
}
function App() {
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0]
  ]);
  const [food, setFood] = useState(getRandomCoordinates())
  const [direction, setDirection] = useState('RIGHT')

  useEffect(() => {
    document.onkeydown = onKeyDown
  }, [])

  const onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        setDirection('UP');
        break;
      case 40:
        setDirection('DOWN');
        break;
      case 37:
        setDirection('LEFT');
        break;
      case 39:
        setDirection('RIGHT');
        break;
    }
  }

  return (
    <div className="game-area">
      <Snake snakeDots={snakeDots} />
      <Food dot={food} />
    </div>
  );
}

export default App;
