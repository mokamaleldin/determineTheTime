import React, { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef(null);
  const [name, setName] = useState(null);

  function handleName() {
    setName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome { name ?? 'unknown entity' } </h2>
      <p>
        <input type="text" ref={ playerName } />
        <button onClick={ handleName } >Set Name</button>
      </p>
    </section>
  );
}
