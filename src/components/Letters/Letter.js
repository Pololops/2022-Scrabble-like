import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

export default function Letter({
  id, className, letter, score, index,
}) {
  return (
    <Draggable draggableId={`letter-${id}`} index={index}>
      {(provided) => (
        <div
          className={className}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {letter.toUpperCase()}
          {score > 0 && <span className={`${className}__score`}>{score}</span>}
        </div>
      )}
    </Draggable>
  );
}

Letter.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  letter: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
