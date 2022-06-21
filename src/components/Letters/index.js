import './style.scss';

import { useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { useSelector, useDispatch } from 'react-redux';
import { getLetterFromDeck } from 'src/actions';

import Letter from './Letter';

export default function Letters() {
  const playerLetters = useSelector((state) => state.playerLetters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLetterFromDeck());
  }, []);

  return (
    <Droppable droppableId="droppable-letters" direction="horizontal">
      {(provided) => (
        <div
          className="letters"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {playerLetters.map(({ id, letter, score }, index) => (
            <Letter
              key={id}
              id={id}
              letter={letter}
              score={score}
              index={index}
              className="letters__letter"
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
