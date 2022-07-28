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
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    handleGenerateNext();
    e.preventDefault();
  };
  return (
    <div className='modal'>
      <div>
        <h1>Nevermind !</h1>
        <p className='solution'>{solution}</p>
        <button onClick={handleSubmit}>next</button>
      </div>
    </div>
  );
}
