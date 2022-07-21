import React from 'react';
import Wordle from './Wordle';
import { useState } from 'react';

export default function Modal({
  turn,
  solution,
  setQuestions,
  setSolution,
  tenQuestions,
  handleGenerateNext,
  setShowModal,
  showModal,
}) {
  return (
    <div className='modal'>
      <div>
        <h1>You Earn One !</h1>
        <p className='solution'>{solution}</p>
        <button onClick={handleGenerateNext}>next</button>
        <p> You find the solution in {turn} guesses </p>
      </div>
    </div>
  );
}

{
  /* {!isCorrect && (
      <div>
        <h1>Nevermind!</h1>

        <p className='solution'>{solution}</p>
        <button onClick={handleGenerateNext}>next</button>
        <p> Better luck next time </p>
      </div>
    )} */
}
