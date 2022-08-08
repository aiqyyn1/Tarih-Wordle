import React, { useState, useEffect } from 'react';
import lol from './components/lol.json';
import useWordle from './hooks/useWordle';
export default function Keyboard({
  handleAddWordToGrid,
  usedKeys,
  turn,
  history,
  currentGuess,
  solution,
}) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(lol.letters);
  }, []);

  return (
    <div className='keypad'>
      {letters &&
        letters.map((l) => {
          // const color = usedKeys[l.key];
          return (
            <button
              key={l.key}
              // className={color}
              onClick={() => handleAddWordToGrid(l.key)}
            >
              {l.key}
            </button>
          );
        })}
    </div>
  );
}
