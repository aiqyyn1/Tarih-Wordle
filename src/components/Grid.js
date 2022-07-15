import React from 'react';
import Row from './Row';
import useWordle from '../hooks/useWordle';
export default function Grid({ currentGuess, guesses, turn, solutionLength }) {
  console.log('guesses', guesses);
  return (
    <div>
      {guesses.map((guess, i) => {
        if (turn === i) {
          return (
            <Row
              key={i}
              currentGuess={currentGuess}
              solutionLength={solutionLength}
            ></Row>
          );
        }
        return <Row key={i} solutionLength={solutionLength} guess={guess} />;
      })}
    </div>
  );
}
