import React from 'react';
import Wordle from './Wordle';
import { useState } from 'react';

export default function Modal({
  isCorrect,
  turn,
  solution,
  setQuestions,
  setSolution,
  tenQuestions,
  handleGenerateNext,
  setShowModal,
  showModal,
  countRightAnswer,
}) {
  return (
    <div className='modal'>
      <div>
        <h1>You Earn 1 point !</h1>
        <h2> Your score is {countRightAnswer}</h2>
        <p className='solution'>{solution}</p>
        <button onClick={handleGenerateNext}>next</button>
        <p> You find the solution in {turn} guesses </p>
      </div>
    </div>
  );
}
