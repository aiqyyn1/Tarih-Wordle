import './App.css';
import Wordle from './components/Wordle';
import { useState, useEffect } from 'react';
import icon from './foto/icon.png';
import setting from './foto/setting.jpeg';

import axios from 'axios';
import lol from './json1/lol.json';
import useWordle from './hooks/useWordle';
import { isGuessed } from './utils';

function App() {
  let tenQuestions = [];
  // const [solution, setSolution] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [amountquestions, setAmountQuestions] = useState([...Array(10)]);
  const [name, setName] = useState('');
  const [solution, setSolution] = useState(
    tenQuestions[Math.floor(Math.random() * tenQuestions.length)]
  );

  // const handleGenerateNext = () => {
  //   setSolution(
  //     lol.questions1[Math.floor(Math.random() * lol.questions1.length)]
  //   );
  // };
  let set = new Set();
  while (set.size < 5) {
    set.add(Math.floor(Math.random() * 5));
  }
  console.log(set);

  for (let i = 0; i < lol.questions1.length; i++) {
    if (set.has(i)) {
      tenQuestions.push(lol.questions1[i]);
    }
  }
  console.log(tenQuestions);

  // const handleGenerateNext = () => {
  //   fetch('http://localhost:3001/questions1')
  //     .then((res) => res.json())
  //     .then((questions1) => {
  //       const randomSolution =
  //         questions1[Math.floor(Math.random() * questions1.length)];

  //       setSolution(randomSolution.answer);
  //       setQuestions(randomSolution.questions);
  //     });
  // };

  // useEffect(() => {
  //   fetch('http://localhost:3001/questions1')
  //     .then((res) => res.json())
  //     .then((questions1) => {
  //       const randomSolution =
  //         questions1[Math.floor(Math.random() * questions1.length)];

  //       setSolution(randomSolution.answer);
  //       setQuestions(randomSolution.questions);
  //     });
  // }, []);

  // useEffect(() => {
  //   // console.log('===>', isGuessed(guesses));
  // }, [guesses]);

  // const { setGuesses, currentQuestionCounter, guesses } = useWordle(solution);
  // console.log(guesses);
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
      <div className='low'></div>
      <div id='lol'></div>

      {solution && <Wordle solution={solution} questions={questions}></Wordle>}
    </div>
  );
}
export default App;
