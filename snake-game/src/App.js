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
  const [speed, setSpeed] = useState(200)

  const moveSnake = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];

    switch (direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }

    dots = [
      ...dots.slice(1),
      head
    ];
    setSnakeDots(dots);
  }

  const checkIfOutOfGameArea = () => {
    let head = snakeDots[snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      onGameOver()
    }
  }

  const checkIfCollide = () => {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        onGameOver()
      }
    })
  }

  const onGameOver = () => {
    alert(`Game Over. Snake length is ${snakeDots.length}`);
    setSnakeDots([
      [0, 0],
      [2, 0]
    ]);
    setDirection('RIGHT');
  }

  useEffect(() => {
    checkIfOutOfGameArea()
    checkIfCollide()
    setInterval(moveSnake, 500)
    document.onkeydown = onKeyDown
  }, [moveSnake])

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
