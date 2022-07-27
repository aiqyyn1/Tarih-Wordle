import React from 'react';
import Wordle from './Wordle';
import { useState } from 'react';

export default function Modal({ countRightAnswer, tenQuestionsLength }) {
  return (
    <div className='modal3'>
      <div>
        <h1>Game is over</h1>
        <h2>
          {' '}
          Your score is {tenQuestionsLength} out {countRightAnswer}
        </h2>
      </div>
    </div>
  );
}
