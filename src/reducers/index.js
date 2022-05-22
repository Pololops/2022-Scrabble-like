// Les actions
import { GET_LETTER_FROM_DECK } from 'src/actions';

// Les selectors
import { getRandomInt, nbLettersInDeck } from 'src/selectors';

// Initial state
import initialState from './initialState';

// Le reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LETTER_FROM_DECK: {
      const quantityInDeck = nbLettersInDeck(state.deckLetters);
      const randomNumber = getRandomInt(quantityInDeck);

      console.log('Random Number : ', randomNumber, '/', quantityInDeck);

      return {
        ...state, // reprise de tout l'ancien state
        // TODO : algo pour piocher une lettre au hasard dans le deck, et l'ajouter au player
      };
    }

    default:
      return state;
  }
};

export default reducer;
