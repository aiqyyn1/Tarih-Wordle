import React from 'react';
import Row from './Row';
import useWordle from '../hooks/useWordle';
export default function Grid({
  currentGuess,
  guesses,
  turn,
  solutionLength,
  solution,
}) {
  // console.log('guesses', guesses);
  // console.log('guesses', guesses);
  return (
    <div>
      {guesses.map((guess, i) => {
        if (turn === i) {
          return (
            <Row
              key={i}
              currentGuess={currentGuess}
              solutionLength={solutionLength}
              solution={solution}
            ></Row>
          );
        }
        return (
          <Row
            key={i}
            solutionLength={solutionLength}
            guess={guess}
            solution={solution}
          />
        );
      })}
    </div>
  );
}
