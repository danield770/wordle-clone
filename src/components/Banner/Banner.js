import React from 'react';

function Banner({ bannerType, children }) {
  return <div className={`banner ${bannerType}`}>{children}</div>;
}

export default Banner;

// my first implementation

// function Banner({ numGuesses, gameStatus, answer }) {
//   return (
//     <>
//       {gameStatus === 'win' ? (
//         <div className='happy banner'>
//           <p>
//             <strong>Congratulations!</strong> Got it in{' '}
//             <strong>{numGuesses} guesses</strong>.
//           </p>
//         </div>
//       ) : (
//         <div className='sad banner'>
//           <p>
//             Sorry, the correct answer is <strong>{answer}</strong>.
//           </p>
//         </div>
//       )}
//     </>
//   );
// }

// export default Banner;
