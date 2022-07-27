import React from 'react';
import useWordle from '../hooks/useWordle';
import { useEffect, useState, createContext } from 'react';
import Grid from './Grid';

import Modal from './Modal';
import Modal2 from './Modal2';

export default function Wordle({
  solution,
  questions,
  handleGenerateNext,
  currentQuestion,
  tenQuestions,
}) {
  const {
    handleKeyUp,
    currentGuess,
    setCurrentGuess,
    guesses,
    setGuesses,
    turn,
    setTurn,
    setCountRightAnswer,
    countRightAnswer,
    setIsCorrect,
    isCorrect,
    setHistory,
  } = useWordle(solution);

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000);
      window.removeEventListener('keyup', handleKeyUp);
    }
    if (turn > 5) {
      setTimeout(() => setShowModal2(true), 2000);
      window.removeEventListener('keyup', handleKeyUp);
    }
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp, isCorrect, turn, currentQuestion]);

  return (
    <div>
      {/* <div>solution is-{solution}</div> */}

      <div className='questions'>{questions}</div>

      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        solutionLength={solution.length}
        turn={turn}
        solution={solution}
        currentQuestion={currentQuestion}
        setGuesses={setGuesses}
        setTurn={setTurn}
        setShowModal={setShowModal}
        showModal={showModal}
        setCurrentGuess={setCurrentGuess}
        setHistory={setHistory}
        setIsCorrect={setIsCorrect}
        setShowModal2={setShowModal2}
      />
      {showModal && isCorrect && (
        <Modal
          turn={turn}
          solution={solution}
          countRightAnswer={countRightAnswer}
          handleGenerateNext={handleGenerateNext}
          showModal={showModal}
        />
      )}
      {showModal2 && turn>5 && (
        <Modal2
          solution={solution}
          handleGenerateNext={handleGenerateNext}
          showModal2={showModal2}
        />
      )}
    </div>
  );
}
