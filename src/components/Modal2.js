import React from 'react';
import Wordle from './Wordle';
import { useState, useEffect } from 'react';

export default function Modal2({
  turn,
  solution,
  setQuestions,
  setSolution,
  tenQuestions,
  handleGenerateNext,
  setShowModal2,
  showModal2,
  handleKeydown,
}) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  return (
    <div className='modal'>
      {/* <h1>Тағы бір рет көріңіз !</h1>
        <p className='solution'>Жауабы: {solution}</p>
        <button onClick={handleGenerateNext}>Келесі</button> */}
      <div className='modal'>
        <div className='wrapper'>
          <div className='texts'>
                <h1>Тағы бір рет көріңіз !</h1>
            <h1 className='solution'>Жауабы: {solution}</h1>
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
    </div>
  );
}
