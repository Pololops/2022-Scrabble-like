// Les actions
import { GET_LETTER_FROM_DECK } from 'src/actions';

// Les selectors
import { getRandomItemFromDeck } from 'src/selectors';

// Initial state
import initialState from './initialState';

// Le reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LETTER_FROM_DECK: {
      // ? Empêche le tiage d'une nouvelle lettre si la pioche est vide ou s'il y a dejà 7 lettres
      if (state.deckLetters.length === 0 || state.playerLetters.length >= 7) {
        return state;
      }

      // ? Génère un nombre aléatoire compris entre 0 et le nombre de lettres restantes en pioche
      const randomIndex = getRandomItemFromDeck(state.deckLetters);

      // ? Génère un id unique pour les lettres du joueur
      const letterId = state.playerLetters.length > 0
        ? state.playerLetters[state.playerLetters.length - 1].id + 1
        : 1;

      // ? Récupère la lettre tirée au hasard dans la pioche et son score
      const { letter: randomLetter, score: randomLetterScore } = state.deckLetters[randomIndex];

      // ? Retire la lettre tirée de la pioche : quantité - 1 et suppression si quantité = 0
      const newDeckLetters = state.deckLetters
        .map((item, index) => {
          if (index === randomIndex) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        })
        .filter((item) => item.quantity > 0);

      return {
        ...state, // reprise de tout l'ancien state

        playerLetters: [
          ...state.playerLetters,
          { id: letterId, letter: randomLetter, score: randomLetterScore },
        ],

        deckLetters: [...newDeckLetters],
      };
    }

    default:
      return state;
  }
};

export default reducer;
