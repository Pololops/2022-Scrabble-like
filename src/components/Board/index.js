import './style.scss';

export default function Board() {
  const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className="board">
      {squares.map(() => squares.map(() => <div className="board__square" />))}
    </div>
  );
}
