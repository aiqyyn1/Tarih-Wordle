import React, { useState, useEffect } from 'react';
import lol from './data.json';
import useWordle from './hooks/useWordle';
export default function Keyboard({
  handleAddWordToGrid,
  usedKeys,
  turn,
  history,
  currentGuess,
  solution,
}) {
  const [firsColumn, setFistColumn] = useState(null);
  const [secondColumn, setSecondColumn] = useState(null);
  const [thirdColumn, setThirdColumn] = useState(null);
  const [fourColumn, setFourColumn] = useState(null);
  const [fiveColumn, setFiveColumn] = useState(null);
  useEffect(() => {
    setFistColumn(lol.firstColumn);
    setSecondColumn(lol.secondColumn);
    setThirdColumn(lol.thirdColumn);
    setFourColumn(lol.fourColumn);
    setFiveColumn(lol.fiveColumn);
  }, []);

  return (
    <div className='keypad'>
      <div className='digitgroup'>
        {firsColumn &&
          firsColumn.map((l, index) => {
            // const color = usedKeys[l.key];

            return (
              <div className='digit' key={index}>
                <button
                  className='digits'
                  key={index}
                  // className={color}
                  onClick={() => handleAddWordToGrid(l.key)}
                >
                  {l.key}
                </button>
              </div>
            );
          })}
      </div>
      <div className='digitgroup'>
        {secondColumn &&
          secondColumn.map((l, index) => {
            // const color = usedKeys[l.key];

            return (
              <div className='digit' key={index}>
                <button
                  className='digits'
                  key={index}
                  // className={color}
                  onClick={() => handleAddWordToGrid(l.key)}
                >
                  {l.key}
                </button>
              </div>
            );
          })}
      </div>
      <div className='digitgroup'>
        {thirdColumn &&
          thirdColumn.map((l, index) => {
            // const color = usedKeys[l.key];

            return (
              <div className='digit' key={index}>
                <button
                  className='digits'
                  key={index}
                  // className={color}
                  onClick={() => handleAddWordToGrid(l.key)}
                >
                  {l.key}
                </button>
              </div>
            );
          })}
      </div>
      <div className='digitgroup'>
        {fourColumn &&
          fourColumn.map((l, index) => {
            // const color = usedKeys[l.key];

            return (
              <div className='digit' key={index}>
                <button
                  className='digits'
                  key={index}
                  // className={color}
                  onClick={() => handleAddWordToGrid(l.key)}
                >
                  {l.key}
                </button>
              </div>
            );
          })}
      </div>
      <div className='digitgroup'>
        {fiveColumn &&
          fiveColumn.map((l, index) => {
            // const color = usedKeys[l.key];

            return (
              <div className='digit' key={index}>
                <button
                  className='digits'
                  key={index}
                  // className={color}
                  onClick={() => handleAddWordToGrid(l.key)}
                >
                  {l.key}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
