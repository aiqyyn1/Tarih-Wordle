import React from 'react';
import Wordle from './Wordle';
import { useState } from 'react';

export default function Modal2({
  turn,
  solution,
  setQuestions,
  setSolution,
  tenQuestions,
  handleGenerateNext,
  setShowModal2,
  showModal2,
}) {
  return (
    <div className='modal'>
      <div>
        <h1>Nevermind !</h1>
        <p className='solution'>{solution}</p>
        <button onClick={handleGenerateNext}>next</button>
      </div>
    </div>
  );
}
