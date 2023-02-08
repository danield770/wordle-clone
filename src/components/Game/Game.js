import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';

// // Pick a random word on every pageload.
// const answer = sample(WORDS);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [letterMap, setLetterMap] = React.useState({});

  console.log(guesses);
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  function restart() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus('running');
    setLetterMap({});
  }

  function colorTheKeyboard(word) {
    const result = checkGuess(word, answer).map(({ letter, status }) => [
      letter,
      status,
    ]);
    const newLetters = Object.fromEntries(result);
    const nextLetters = { ...letterMap, ...newLetters };
    console.log({ nextLetters });
    setLetterMap(nextLetters);
  }

  const handleAddGuess = (word) => {
    console.log({ word });
    const newGuess = { id: Date.now(), word };
    console.log({ newGuess });
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
    colorTheKeyboard(word);
    if (word === answer) {
      setGameStatus('win');
    } else {
      nextGuesses.length === NUM_OF_GUESSES_ALLOWED && setGameStatus('lose');
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} gameStatus={gameStatus} />
      <Keyboard letterMap={letterMap} />
      {/* my first implementation */}
      {/* {gameStatus !== 'running' && (
        <Banner
          numGuesses={guesses.length}
          gameStatus={gameStatus}
          answer={answer}
        />
      )} */}
      {gameStatus === 'win' && (
        <Banner bannerType='happy'>
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length} guesses</strong>.{' '}
            <button
              onClick={restart}
              style={{
                border: '1px solid',
                padding: '3px',
                borderRadius: '4px',
              }}
            >
              Restart
            </button>
          </p>
        </Banner>
      )}
      {gameStatus === 'lose' && (
        <Banner bannerType='sad'>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.{' '}
            <button
              onClick={restart}
              style={{
                border: '1px solid',
                padding: '3px',
                borderRadius: '4px',
              }}
            >
              Restart
            </button>
          </p>
        </Banner>
      )}
    </>
  );
}

export default Game;
