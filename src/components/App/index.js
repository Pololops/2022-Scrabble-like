// Imports
import './styles.scss';
import Header from '../Header';
import Board from '../Board';
import Letters from '../Letters';

// Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Board />
      <Letters />
    </div>
  );
}

export default App;
