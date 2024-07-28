import React, { useState, useRef } from 'react';

export default function Player() {
  const [name, setName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleName(event) {
    setSubmitted(false);
    setName(event.target.value);
  }
  function hadleSubmit() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome { submitted ? name : 'unknown entity' } </h2>
      <p>
        <input type="text" value={ name } onChange={ handleName } />
        <button onClick={ hadleSubmit } >Set Name</button>
      </p>
    </section>
  );
}
