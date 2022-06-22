import './style.scss';

import { Droppable } from 'react-beautiful-dnd';

export default function Board() {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className="board">
      {squares.map(() => squares.map((_, index) => (
        <Droppable key={index} droppableId={`droppable-board-${index}`}>
          {(provided) => (
            <div
              className="board__square"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )))}
    </div>
  );
}
