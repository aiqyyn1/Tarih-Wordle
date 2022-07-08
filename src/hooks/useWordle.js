import { useState } from 'react';
import Wordle from '../components/Wordle';
import lol from '../json1/lol.json';

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
        console.log('you used all your guesses');
        return;
      }
      if (history.includes(currentGuess)) {
        console.log('you already tried that word');
        return;
      }

      if (currentGuess.length !== solution.length) {
        console.log('word must be solution.length chars long');
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
  return { turn, currentGuess, guesses, isCorrect, handleKeyUp };
};

export default useWordle;
