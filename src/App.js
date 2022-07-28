import { useState, useEffect, createContext } from 'react';
import useWordle from './hooks/useWordle';
import Wordle from './components/Wordle';
import icon from './foto/icon.png';
import setting from './foto/setting.jpeg';
import lol from './json1/lol.json';

import './App.css';

import { generateRandomQuestions } from './utils';
import Modal3 from './components/Modal3';

const tenQuestions = generateRandomQuestions(lol.questions1);
export const AppContext = createContext();

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [countRightAnswer, setCountRightAnswer] = useState(0);
  const [solution, setSolution] = useState(
    tenQuestions[currentQuestion]?.answer
  );
  const [questions, setQuestions] = useState(
    tenQuestions[currentQuestion]?.questions
  );
  const handleGenerateNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  useEffect(() => {
    if (
      currentQuestion <= 5 ||
      currentQuestion <= 4 ||
      currentQuestion <= 3 ||
      currentQuestion <= 2
    ) {
      setSolution(
        tenQuestions[currentQuestion]?.answer || (
          <div className='game'>
            <h1>Game is over</h1>
          </div>
        )
      );
      setQuestions(
        tenQuestions[currentQuestion]?.questions || (
          <div className='game'>
            <h1>Game is over</h1>
          </div>
        )
      );
    }
  }, [currentQuestion]);
 console.log(tenQuestions);
  console.log('countRightAnswer', countRightAnswer);
  return (
    <AppContext.Provider value={{ countRightAnswer, setCountRightAnswer }}>
      <div className='App'>
        <div className='wrapper'>
          <img
            src={setting}
            alt='my image'
            className='buttonImage'
      
          />

          <h1 className='title '> Тарих Ойыны</h1>
          <img className='icon' src={icon}></img>
        </div>
        <div className='low'></div>
        <div id='lol'></div>

        {tenQuestions[currentQuestion]?.questions ? (
          <Wordle
            solution={solution}
            questions={questions}
            handleGenerateNext={handleGenerateNext}
            currentQuestion={currentQuestion}
            tenQuestions={tenQuestions}
          ></Wordle>
        ) : (
          <Modal3
            countRightAnswer={countRightAnswer}
            tenQuestionsLength={tenQuestions.length}
          ></Modal3>
        )}
      </div>
    </AppContext.Provider>
  );
};
export default App;
