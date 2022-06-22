// Les actions
import { GET_LETTER_FROM_DECK, RESORT_LETTER } from 'src/actions';

// Les selectors
import { getRandomItemFromDeck } from 'src/selectors';

// Initial state
import initialState from './initialState';

// Le reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_LETTER_FROM_DECK: {
      // ? Empêche le tirage d'une nouvelle lettre si la pioche est vide ou s'il y a dejà 7 lettres
      if (state.deckLetters.length === 0 || state.playerLetters.length >= 7) {
        return state;
      }

      // ? Génère un nombre aléatoire compris entre 0 et le nombre de lettres restantes en pioche
      const randomIndex = getRandomItemFromDeck(state.deckLetters);

      // ? Génère un id unique pour les lettres du joueur : date now into timestamp
      const letterId = new Date().getTime() / 1000;

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
          {
            id: letterId,
            letter: randomLetter,
            score: randomLetterScore,
          },
        ],

        deckLetters: [...newDeckLetters],
      };
    }

    case RESORT_LETTER: {
      const oldPosition = action.payload.source.index;
      const newPosition = action.payload.destination.index;

      const originalLetters = [...state.playerLetters];
      originalLetters.splice(
        newPosition,
        0,
        originalLetters.splice(oldPosition, 1)[0],
      );

      return {
        ...state,
        playerLetters: originalLetters,
      };
    }

    default:
      return state;
  }
};

export default reducer;
