import { useContext, useState } from 'react';
import { AppContext } from '../App';
import Wordle from '../components/Wordle';
import lol from '../json1/lol.json';

const useWordle = (solution) => {
  const { countRightAnswer, setCountRightAnswer } = useContext(AppContext);
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [usedKeys, setUsedKeys] = useState({});
  const [isCorrect, setIsCorrect] = useState(false);

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
      if (solutionsArray.includes(l.key) && l.color !== 'green') {
        formattedGuess[i].color = 'yellow';
        solutionsArray[solutionsArray.indexOf(l.key)] = null;
      }
    });
    return formattedGuess;

  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
      setCountRightAnswer((countRightAnswer) => countRightAnswer + 1);
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
    setUsedKeys((prevusedKeys) => {
      let newKeys = { ...prevusedKeys };
      formattedGuess.forEach((l) => {
        const currentColor = newKeys[l.key];
        if (l.color === 'green') {
          newKeys[l.key] = 'green';
          return;
        }
        if (l.color === 'yellow' && currentColor !== 'green') {
          newKeys[l.key] = 'yellow';
          return;
        }
        if (
          l.color === 'grey' &&
          currentColor !== 'green' &&
          currentColor !== 'yellow'
        ) {
          newKeys[l.key] = 'grey';
          return;
        }
      });
      return newKeys;
    });

    setCurrentGuess('');
  };

  const handleKeyUp = ({ key }) => {
    if (key === 'Enter') {
      if (turn > 5) {
        return;
      }
      if (history.includes(currentGuess)) {
        return;
      }

      if (currentGuess.length !== solution.length) {
        console.log('not enough letters');
        return;
      }
      const format = formatGuess();
      addNewGuess(format);
      // console.log(guesses);
    }
    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }

    if (
      key !== 'Shift' &&
      key !== 'Space' &&
      key !== 'Meta' &&
      key !== 'Control' &&
      key !== 'Escape' &&
      key !== 'Alt'
    ) {
      if (currentGuess.length < solution.length) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };

  return {
    turn,
    setTurn,
    currentGuess,
    setCurrentGuess,
    guesses,
    isCorrect,
    setIsCorrect,
    handleKeyUp,
    setCountRightAnswer,
    countRightAnswer,
    setGuesses,
    setHistory,
    usedKeys,
  };
};

export default useWordle;
