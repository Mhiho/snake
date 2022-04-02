import './App.css';
import Field from './Field';
import React, { useEffect, useState } from 'react';
import Snake from './Snake';
import Arrow from './Arrow';
function App() {
  const [snake, setSnake] = useState([])
  const [length, setLength] = useState(3)
  const [moveIndex, setMoveIndex] = useState(1)
  const board = []
  for ( let i = 1; i<=256; i++) {
    let startIndex;
    let endIndex;
    startIndex = moveIndex;
    
    startIndex <= 254 ? endIndex = startIndex +2 :
    endIndex = startIndex -254
    console.log(startIndex);
    console.log(endIndex);
    
    // eslint-disable-next-line no-unused-expressions
    startIndex > endIndex ? i>= startIndex && i< (startIndex + length) && board.push({index: i, b: true}) : i>=startIndex && i<= endIndex
    ? 
        board.push({index: i, b: true}) :
      board.push({index: i, b: false})
  }

  useEffect(() => {
    setSnake(board)
    console.log(snake)
    const timer = setTimeout(()=> {
      moveIndex <256 && moveIndex > 0?
      setMoveIndex(moveIndex +1) :
      setMoveIndex(1)
      // const dupa = [];
      // for(let i=0; i<snake.length; i++){

      // }
      // setSnake(dupa)
    },1000)
    return () => clearTimeout(timer)
  },[moveIndex])

  const moveUp = () => {

  }

  return (
    <div className='Container'>
      <div>

      <Arrow direction='&#x2191;' onClick={moveUp}/>
      <Arrow direction='&#x2190;' />
      <Arrow direction='&#x2192;' />
      <Arrow direction='&#x2193;' />
      </div>
    <div className="App">
      {
        snake?.map((field,index) => 
          field['b'] === true ? 
              <Snake /> : 
              <Field index={field['index']}/>      
            )
        }
    </div>
        </div>
  );
}

export default App;
