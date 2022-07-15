import { createContext, useState } from 'react';
import Wordle from '../components/Wordle';
import lol from '../json1/lol.json';

const AppContext = createContext();

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [count, setCount] = useState(0);
  const [isCorrect, setisCorrect] = useState(false);

  const formatGuess = () => {
    let solutionsArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: 'grey' };
    });
    formattedGuess.forEach((l, i) => {
      if (solutionsArray[i] === l.key) {
        formattedGuess[i].color = 'green';
        solutionsArray[i] = null;
      }
    });
    formattedGuess.forEach((l, i) => {
      if (solutionsArray.includes(l.key) && l.key !== 'green') {
        formattedGuess[i].color = 'yellow';
        solutionsArray[solutionsArray.indexOf(l.key)] = null;
      }
    });
    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setisCorrect(true);
      setCount((count) => count + 1);
    }

    setGuesses((prevGuesses) => {
      let newGuess = [...prevGuesses];
      newGuess[turn] = formattedGuess;
      return newGuess;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setCurrentGuess('');
  };

  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') {
      if (turn > 5) {
        alert('болды брат попыткаларын бытты ');
        return;
      }
      if (history.includes(currentGuess)) {
        alert('брат жаздын го уже ондай созды');
        return;
      }

      if (currentGuess.length !== solution.length) {
        alert('бля брат дурыстап жазсай');
        return;
      }
      const format = formatGuess();
      addNewGuess(format);
    }
    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (key !== 'Enter' && key !== 'Shift') {
      if (currentGuess.length < solution.length) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  // return (
  //   <AppContext.Provider value={{ turn, currentGuess, guesses, isCorrect, handleKeyUp }}>

  //   </AppContext.Provider>
  // )

  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
