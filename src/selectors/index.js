/* eslint-disable import/prefer-default-export */

/**
 * function qui retourne un entier compris entre 1 et max
 * @param {number} max un nombre maximum
 * @returns un entier compris entre 1 et max inclus
 */
export function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

/**
 * function qui retourne le nombre de lettres restantes dans la pioche
 * @param {array} deck un tableau d'objets contenant une propriété quantity
 * @returns la quantity de lettres restantes dans la pioche
 */
export function nbItemsInDeck(deck) {
  return deck.map(({ quantity }) => quantity).reduce((a, b) => a + b);
}

/**
 * function qui retourne l'index d'une lettre au hasard dans la pioche
 * @param {array} deck un tableau d'objets contenant une propriété quantity
 * @returns une lettre de la pioche
 */
export function getRandomItemFromDeck(deck) {
  const nbInDeck = nbItemsInDeck(deck);
  let randomInt = getRandomInt(nbInDeck);

  console.log('random nb : ', randomInt, '/', nbInDeck);

  if (nbInDeck > 0) {
    const indexLetter = deck.findIndex((item) => {
      if (randomInt > item.quantity) {
        randomInt -= item.quantity;
      }
      else {
        return item;
      }

      return null;
    });

    return indexLetter;
  }

  return null;
}
