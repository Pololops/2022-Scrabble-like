import './style.scss';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getLetterFromDeck } from 'src/actions';

import Letter from './Letter';

export default function Letters() {
  const playerLetters = useSelector((state) => state.playerLetters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLetterFromDeck());
  }, []);

  const handleClick = () => {
    dispatch(getLetterFromDeck());
  };

  return (
    <div className="letters">
      <button type="button" onClick={handleClick}>click</button>
      {playerLetters.map((letter) => (
        <Letter
          key={letter.id}
          {...letter}
          className="letters__letter"
        />
      ))}
    </div>
  );
}
