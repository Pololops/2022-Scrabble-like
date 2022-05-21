import './style.scss';
import Letter from './Letter';

// data
import { playerLetters, letters } from '../../../data';

console.log(
  'Nombre de lettres total : ',
  letters.map(({ quantity }) => quantity).reduce((a, b) => a + b),
);

export default function Letters() {
  return (
    <div className="letters">
      {playerLetters.map(({ id, letter, score }) => (
        <Letter
          key={id}
          className="letters__letter"
          letter={letter}
          score={score}
        />
      ))}
    </div>
  );
}
