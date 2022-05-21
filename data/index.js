/**
 * A function that returns a random integer between zero and a max number
 * @param {numer} max le nombre maximum exclus
 * @returns an integer between zero and max excluded
 */
export const getRandomInt = (max) => Math.floor(Math.random() * max);

export const playerLetters = [
  { id: 1, letter: 'L', score: 1 },
  { id: 2, letter: 'E', score: 1 },
  { id: 3, letter: 'T', score: 2 },
  { id: 7, letter: ' ', score: 0 },
  { id: 5, letter: 'E', score: 1 },
  { id: 6, letter: 'R', score: 2 },
  { id: 7, letter: 'S', score: 1 },
];

export const letters = [
  { letter: 'A', score: 1, quantity: 9 },
  { letter: 'B', score: 3, quantity: 2 },
  { letter: 'C', score: 3, quantity: 2 },
  { letter: 'D', score: 2, quantity: 3 },
  { letter: 'E', score: 1, quantity: 15 },
  { letter: 'F', score: 4, quantity: 2 },
  { letter: 'G', score: 2, quantity: 2 },
  { letter: 'H', score: 4, quantity: 2 },
  { letter: 'I', score: 1, quantity: 8 },
  { letter: 'J', score: 8, quantity: 1 },
  { letter: 'K', score: 10, quantity: 1 },
  { letter: 'L', score: 1, quantity: 5 },
  { letter: 'M', score: 2, quantity: 3 },
  { letter: 'N', score: 1, quantity: 6 },
  { letter: 'O', score: 1, quantity: 6 },
  { letter: 'P', score: 3, quantity: 2 },
  { letter: 'Q', score: 8, quantity: 1 },
  { letter: 'R', score: 1, quantity: 6 },
  { letter: 'S', score: 1, quantity: 6 },
  { letter: 'T', score: 1, quantity: 6 },
  { letter: 'U', score: 1, quantity: 6 },
  { letter: 'V', score: 4, quantity: 2 },
  { letter: 'W', score: 10, quantity: 1 },
  { letter: 'X', score: 10, quantity: 1 },
  { letter: 'Y', score: 10, quantity: 1 },
  { letter: 'Z', score: 10, quantity: 1 },
  { letter: ' ', score: 0, quantity: 2 },
];
