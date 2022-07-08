import React from 'react';
import useWordle from '../hooks/useWordle';
import { useEffect } from 'react';
import Grid from './Grid';

export default function Wordle({ solution, questions }) {
  const { currentGuess, handleKeyUp, guesses, isCorrect, turn, count } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp]);

  useEffect(() => {
    // console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);
  return (
    <div>
      <div>solution is-{solution}</div>
      <div>current guesses - {currentGuess}</div>
      <div>questions is-{questions}</div>
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        solutionLength={solution.length}
      />
    </div>
  );
}
