import React from 'react';

export default function ({ solutionLength, guess, currentGuess, solution }) {
  if (guess) {
    return (
      <div className='row past'>
        {guess.map((letter, index) => (
          <div key={index} className={letter.color}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }
  if (currentGuess) {
    let letters = currentGuess.split('');

    return (
      <div className='row current'>
        {letters.map((letter, i) => (
          <div key={i} className='filled'>
            {' '}
            {letter}{' '}
          </div>
        ))}
        {[...Array(solutionLength - letters.length)].map((index) => (
          <div key={index}></div>
        ))}
      </div>
    );
  }
  return (
    <div className='row'>
      {[...Array(solutionLength)].map((index) => (
        <div key={index}></div>
      ))}
    </div>
  );
}
