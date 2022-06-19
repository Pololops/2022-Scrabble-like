import { useDispatch } from 'react-redux';
import { getLetterFromDeck } from 'src/actions';

import './styles.scss';

export default function GetLetterButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getLetterFromDeck());
  };

  return (
    <button type="button" className="get-Letter-button" onClick={handleClick}>
      Pioche
    </button>
  );
}
