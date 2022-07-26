export const generateRandomQuestions = (array) => {
  let tenQuestions = [];
  const set = new Set();
  for (let i = 0; i < 5; i++) {
    set.add(array[Math.floor(Math.random() * array.length)]);
  }
  tenQuestions = [...set];
  return tenQuestions;
};
