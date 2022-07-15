import './App.css';
import Wordle from './components/Wordle';
import { useState, useEffect } from 'react';
import icon from './foto/icon.png';
import setting from './foto/setting.jpeg';

import axios from 'axios';
import lol from './json1/lol.json';

function App({ guesses }) {
  const [solution, setSolution] = useState(null);
  const [questions, setQuestions] = useState(null);

  const [name, setName] = useState('');
  // const [randomLols, setRandomLols] = useState(
  //   lol.questions1[Math.floor(Math.random() * lol.questions1.length)].title
  // );

  // const handleGenerateNext = () => {
  //   setRandomLols(
  //     lol.questions1[Math.floor(Math.random() * lol.questions1.length)].title
  //   );
  // };

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
  useEffect(() => {
    fetch('http://localhost:3001/questions1')
      .then((res) => res.json())
      .then((questions1) => {
        const randomSolution =
          questions1[Math.floor(Math.random() * questions1.length)];

        setSolution(randomSolution.answer);
        setQuestions(randomSolution.questions);
      });
  }, []);

  return (
    <div className='App'>
      <div className='wrapper'>
        <img
          src={setting}
          alt='my image'
          className='buttonImage'

          // onClick={() => setShow((prev) => !prev)}
        />

        <h1 className='title '>Tarih's game</h1>
        <img className='icon' src={icon}></img>
      </div>
      <div className='low' >
        <button type='button' onClick={handleGenerateNext}>next</button>
      </div>
      <div id='lol'></div>

      {solution && questions && (
        <Wordle solution={solution} questions={questions}></Wordle>
      )}
    </div>
  );
}
export default App;
