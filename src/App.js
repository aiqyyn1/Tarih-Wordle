import { useState, useEffect } from 'react';
import Wordle from './components/Wordle';
import icon from './foto/icon.png';
import setting from './foto/setting.jpeg';
import lol from './json1/lol.json';
import './App.css';
import Modal from './components/Modal';

function App() {
  let tenQuestions = [];
  let set = new Set();
  while (set.size < 5) {
    set.add(Math.floor(Math.random() * 5));
  }

  for (let i = 0; i < lol.questions1.length; i++) {
    if (set.has(i)) {
      tenQuestions.push(lol.questions1[i]);
    }
  }
  console.log(tenQuestions[tenQuestions.length - 1].answer);
  const [questions, setQuestions] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [solution, setSolution] = useState(
    tenQuestions[currentQuestion].answer
  );

  const handleGenerateNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    setSolution(tenQuestions[currentQuestion].answer);
  }, [currentQuestion]);
  return (
    <div className='App'>
      <div className='wrapper'>
        <img src={setting} alt='my image' className='buttonImage' />

        <h1 className='title '>Tarih's game</h1>
        <img className='icon' src={icon}></img>
      </div>
      <div className='low'></div>
      <div id='lol'></div>
      {/* <button onClick={handleGenerateNext}>next</button> */}
      {solution && (
        <Wordle
          solution={solution}
          questions={questions}
          handleGenerateNext={handleGenerateNext}
          currentQuestion={currentQuestion}
        ></Wordle>
      )}
    </div>
  );
}
export default App;
