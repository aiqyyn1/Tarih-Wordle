import React, { useState, useEffect } from 'react';
import lol from './json1/lol.json';
export default function Keyboard(usedKeys) {
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    setLetters(lol.letters);
  }, []);
  console.log(lol.letters);
  return (
    <div className='keypad'>
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
