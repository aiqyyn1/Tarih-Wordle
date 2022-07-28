import React from 'react';
import Wordle from './Wordle';
import { useState, useEffect, useRef } from 'react';

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
  const [value, setValue] = useState('');
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) buttonRef.current.focus();
  }, [buttonRef]);

  return (
    <div className='modal'>
      <form>
        <h1>You Earn 1 point !</h1>
        <h2> Your score is {countRightAnswer}</h2>
        <p className='solution'>{solution}</p>
        <button
          ref={buttonRef}
          onKeyDown={handleGenerateNext}
          onClick={handleGenerateNext}
        >
          next
        </button>
        <p> You find the solution in {turn} guesses </p>
      </form>
    </div>
  );
}
