import React from 'react';
import useWordle from '../hooks/useWordle';
import { useEffect, useState } from 'react';
import Grid from './Grid';
import { isGuessed } from '../utils';
import Modal from './Modal';

export default function Wordle({ solution, questions }) {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn, count } =
    useWordle(solution);
const[showModal, setShowModal]= useState(false);
  useEffect(() => {
    console.log('congrats, you win');
    window.addEventListener('keyup', handleKeyUp);
    if (isCorrect) {
      setTimeout(()=>setShowModal(true),2000)
      window.removeEventListener('keyup', handleKeyUp);
    }
    if (turn > 5) {
      console.log('unlucky, out of guesses');
      setTimeout(()=>setShowModal(true),2000)
      window.removeEventListener('keyup', handleKeyUp);
    }
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  // useEffect(() => {
  //   // console.log(guesses, turn, isCorrect);
  // }, [guesses, turn, isCorrect]);

  // console.log('=>', isGuessed(guesses));
  return (
    <div>
      <div>solution is-{solution}</div>
      {/* <div>current guesses - {currentGuess}</div> */}
      <div>questions is-{questions}</div>

      {/* <div>{isGuessed(guesses) && 'win'}</div> */}

      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        solutionLength={solution.length}
        turn={turn}
        solution={solution}
      />
      { showModal && < Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  );
}
