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
  showModal2,
  handleKeyUp,
  setHistory,
}) {
  useEffect(() => {
    setGuesses([...Array(6)]);
    setTurn(0);
    setCurrentGuess('');
    setShowModal(false);
    setIsCorrect(false);
    setShowModal2(false);
    setHistory([]);
  }, [currentQuestion]);
  return (
    <div>
      {guesses.map((guess, i) => {
        if (turn === i) {
          return (
            <Row
              key={i}
              guess={guess}
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
