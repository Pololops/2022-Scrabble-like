import './styles.scss';

import { useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { resortLetter } from 'src/actions';

import GetLetterButton from '../GetLetterButton';
import Header from '../Header';
import Board from '../Board';
import Letters from '../Letters';

function App() {
  const dispatch = useDispatch();

  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /* ... */
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /* ... */
  }, []);
  const onDragStart = useCallback(() => {
    /* ... */
  }, []);
  const onDragUpdate = useCallback(() => {
    /* ... */
  }, []);
  const onDragEnd = useCallback((result) => {
    if (result.destination) {
      dispatch(resortLetter(result));
    }
  }, []);

  return (
    <div className="app">
      <GetLetterButton />
      <Header />
      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Board />
        <Letters />
      </DragDropContext>
    </div>
  );
}

export default App;
