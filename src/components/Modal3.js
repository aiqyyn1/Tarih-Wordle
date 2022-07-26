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
        <h1>Game is over</h1>
        <h2> Your score is {countRightAnswer}</h2>
      </div>
    </div>
  );
}
