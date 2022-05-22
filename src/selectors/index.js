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
 * @param {array} deck un tableau d'objets contenant un propriété quantity
 * @returns la quantity de lettres restantes dans la pioche
 */
export function nbLettersInDeck(deck) {
  return deck.map(({ quantity }) => quantity).reduce((a, b) => a + b);
}
