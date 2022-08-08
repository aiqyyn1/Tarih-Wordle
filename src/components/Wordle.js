import React from 'react';
import useWordle from '../hooks/useWordle';
import { useEffect, useState, createContext } from 'react';
import Grid from './Grid';

import Modal from './Modal';
import Modal2 from './Modal2';
import Keyboard from '../Keyboard';
import json from './lol.json';

export default function Wordle({
  solution,
  questions,
  handleGenerateNext,
  handleKeydown,
  currentQuestion,
  tenQuestions,
  setCurrentQuestion,
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
    formatGuess,
    addNewGuess,
    isCorrect,
    setHistory,
    usedKeys,
    history,
  } = useWordle(solution);
  console.log(currentGuess);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

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

  const handleAddWordToGrid = (letter) => {
    if (letter === 'Enter') {
      if (turn > 5) {
        return;
      }
      if (currentGuess.length !== solution.length) {
        console.log('not enough letters');
        return;
      }
      const format = formatGuess();
      addNewGuess(format);
      // console.log(guesses);
    }
    if (letter === 'BackSpace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (currentGuess.length < solution.length) {
      setCurrentGuess((prev) => {
        return prev + letter;
      });
    }
  };

  return (
    <div>
      <div className=' questions'>{questions}</div>

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

      <Keyboard
        solution={solution}
        usedKeys={usedKeys}
        handleAddWordToGrid={handleAddWordToGrid}
        handleKeyUp={handleKeyUp}
        turn={turn}
        history={history}
        curretGuess={currentGuess}
      ></Keyboard>

      {showModal && isCorrect && (
        <Modal
          turn={turn}
          solution={solution}
          countRightAnswer={countRightAnswer}
          handleGenerateNext={handleGenerateNext}
          handleKeydown={handleKeydown}
          showModal={showModal}
        />
      )}
      {showModal2 && turn > 5 && (
        <Modal2
          solution={solution}
          handleGenerateNext={handleGenerateNext}
          handleKeydown={handleKeydown}
          showModal2={showModal2}
        />
      )}
    </div>
  );
}
