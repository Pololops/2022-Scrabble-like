import PropTypes from 'prop-types';

export default function Letter({ className, letter, score }) {
  return (
    <div className={className}>
      {letter.toUpperCase()}
      {score > 0 && <span className={`${className}__score`}>{score}</span>}
    </div>
  );
}

Letter.propTypes = {
  className: PropTypes.string.isRequired,
  letter: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
