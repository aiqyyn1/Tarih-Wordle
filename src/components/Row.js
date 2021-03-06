import React from 'react';
import { motion } from 'framer-motion';

export default function ({
  solutionLength,
  guess,
  guesses,
  currentGuess,
  solution,
}) {
  // console.log('solution ====>', solution);
  if (guess) {
    return (
      <div className='row past'>
        {guess.map((letter, index) => (
          <motion.div
            key={index}
            className={letter.color}
            animate={{
              rotate: 360,
            }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {letter.key}
          </motion.div>
        ))}
      </div>
    );
  }
  if (currentGuess) {
    let letters = currentGuess.split('');
    return (
      <div className='row current'>
        {letters.map((letter, i) => (
          <div key={i} className='filled'>
            {letter}
          </div>
        ))}
        {[...Array(solution.length - letters.length)].map((item, index) => (
          <div key={index}></div>
        ))}
      </div>
    );
  }
  return (
    <div className='row'>
      {[...Array(solutionLength)].map((item, index) => (
        <div key={index} className='row'></div>
      ))}
    </div>
  );
}
