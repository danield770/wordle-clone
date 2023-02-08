import React from 'react';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Row({ letters, letterMap }) {
  return (
    <p style={{ display: 'flex', gap: 10 }}>
      {letters.split('').map((letter) => (
        <Cell key={letter} letter={letter} status={letterMap[letter]} />
      ))}
    </p>
  );
}

function Keyboard({ letterMap }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Row letters='QWERTYUIOP' letterMap={letterMap} />
      <Row letters='ASDFGHJKL' letterMap={letterMap} />
      <Row letters='ZXCVBNM' letterMap={letterMap} />
    </div>
  );
}

export default Keyboard;
