import words from './words.js';

export const isCharacterALetter = (char) => (/[a-zA-Z]/).test(char);

export const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

export const wordInWords = (word) => words.filter(otherWord => otherWord === word.toLowerCase()).length === 1;