import React, { useEffect } from 'react';
import Row from './Row';

export default function Grid({
  currentGuess,
  setCurrentGuess,
  guesses,
  setGuesses,
  turn,
  setTurn,
  solutionLength,
  solution,
  currentQuestion,
  setShowModal,
  setIsCorrect,
  setShowModal2,
}) {
  useEffect(() => {
    setGuesses([...Array(6)]);
    setTurn(0);
    setCurrentGuess('');
    setShowModal(false);
    setIsCorrect(false);
    setShowModal2(false);
  }, [currentQuestion]);

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
