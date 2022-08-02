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
  handleKeydown,
  setShowModal,
  showModal,
  countRightAnswer,
}) {
  const buttonRef = useRef(null);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  // console.log(buttonRef.current);
  return (
    <div className='modal'>
      <div className='wrapper'>
        <div className='texts'>
          <h1 className='score'>Ұпай саны: {countRightAnswer}</h1>
          <h1 className='solution'>Жауабы: {solution}</h1>

          <p> Сіз {turn} әрекет ішінде таптыңыз </p>
        </div>
        <div className='button-wrapper'>
          <button
            // ref={buttonRef}
            onClick={handleGenerateNext}
          >
            Келесі
          </button>
        </div>
      </div>
    </div>
  );
}
