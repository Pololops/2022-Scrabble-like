import './styles.scss';

import { useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import GetLetterButton from '../GetLetterButton';
import Header from '../Header';
import Board from '../Board';
import Letters from '../Letters';

function App() {
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
  const onDragEnd = useCallback(() => {
    // the only one that is required
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
