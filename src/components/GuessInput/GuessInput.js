import React from 'react';

function GuessInput({ handleAddGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    handleAddGuess(guess);
    setGuess('');
  };
  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        id='guess-input'
        type='text'
        pattern='[a-zA-Z]{5}'
        maxLength={5}
        title='5 letter word'
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        disabled={gameStatus !== 'running'}
      />
    </form>
  );
}

export default GuessInput;
