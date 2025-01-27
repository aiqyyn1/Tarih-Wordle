import { useState, useEffect, createContext } from 'react';

import Wordle from './components/Wordle';

import lol from './data.json';
import './App.css';
import { generateRandomQuestions } from './utils';
import Modal3 from './components/Modal3';

const tenQuestions = generateRandomQuestions(lol.questions1);
export const AppContext = createContext();
console.log(tenQuestions);

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [countRightAnswer, setCountRightAnswer] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [solution, setSolution] = useState(tenQuestions[currentQuestion]?.answer);
  const [questions, setQuestions] = useState(tenQuestions[currentQuestion]?.questions);
  const handleGenerateNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleKeydown = (event) => {
    if (event.key === 'Enter') {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
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
          <div className="game">
            <h1>Game is over</h1>
          </div>
        )
      );
      setQuestions(
        tenQuestions[currentQuestion]?.questions || (
          <div className="game">
            <h1>Game is over</h1>
          </div>
        )
      );
    }
  }, [currentQuestion]);
  const handleShowRules = () => {
    setShowRules(true);
  };
  console.log('countRightAnswer', countRightAnswer);
  return (
    <AppContext.Provider value={{ countRightAnswer, setCountRightAnswer }}>
      <div className="App">
        <header className="wrapper"></header>
        <h1 className="title "> KAZWORDLE</h1>

        <div className="low"></div>
        <div id="lol"></div>

        {tenQuestions[currentQuestion]?.questions ? (
          <Wordle
            solution={solution}
            questions={questions}
            handleGenerateNext={handleGenerateNext}
            handleKeydown={handleKeydown}
            currentQuestion={currentQuestion}
            tenQuestions={tenQuestions}
            setCurrentQuestion={setCurrentQuestion}
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
