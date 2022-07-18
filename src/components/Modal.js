import React from 'react';
import Wordle from './Wordle';

export default function Modal({
  isCorrect,
  turn,
  solution,
  setQuestions,
  setSolution,
}) {
  const handleGenerateNext = () => {
    fetch('http://localhost:3001/questions1')
      .then((res) => res.json())
      .then((questions1) => {
        const randomSolution =
          questions1[Math.floor(Math.random() * questions1.length)];

        setSolution(randomSolution.answer);
        setQuestions(randomSolution.questions);
      });
  };
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
          <h1>You Earn One !</h1>
          <p className='solution'>{solution}</p>
          <button onClick={handleGenerateNext}>next</button>
          <p> You find the solution in {turn} guesses </p>
      
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind!</h1>
          <p className='solution'>{solution}</p>
          <p> Better luck next time </p>
        </div>
      )}
    </div>
  );
}
