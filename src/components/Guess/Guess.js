import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className='guess'>
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

// my initial implementation

// function Guess0({ guess, answer }) {
//   const guessStatus = guess
//     ? Object.values(checkGuess(guess, answer)).map((value) => value.status)
//     : undefined;

//   return (
//     <p className='guess'>
//       {range(5).map((num) => (
//         <span
//           key={num}
//           className={guessStatus ? `cell ${guessStatus[num]}` : 'cell'}
//         >
//           {guess ? guess[num] : undefined}
//         </span>
//       ))}
//     </p>
//   );
// }

export default Guess;
