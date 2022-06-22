// Les Action Types :
export const GET_LETTER_FROM_DECK = 'GET_LETTER_FROM_DECK';
export const RESORT_LETTER = 'RESORT_LETTER';

// Les Action Creators :
export const getLetterFromDeck = () => ({
  type: 'GET_LETTER_FROM_DECK',
});

export const resortLetter = (payload) => ({
  type: 'RESORT_LETTER',
  payload,
});
