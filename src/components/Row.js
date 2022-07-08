import React from 'react';

export default function ({ solutionLength, guess }) {
  console.log('guess', guess);
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
  return (
    <div className='row'>
      {[...Array(solutionLength)].map((item, index) => (
        <div key={index}></div>
      ))}
    </div>
  );
}
