// Imports
import './styles.scss';
import GetLetterButton from '../GetLetterButton';
import Header from '../Header';
import Board from '../Board';
import Letters from '../Letters';

// Composant
function App() {
  return (
    <div className="app">
      <GetLetterButton />
      <Header />
      <Board />
      <Letters />
    </div>
  );
}

export default App;
