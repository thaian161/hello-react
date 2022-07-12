import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {};

const Application = () => {
  const [name, setName] = useState('');

  const reset = () => {
    console.log('reset');
    // your code here
  };

  const handleClick = () => {
    location.reload();
  };

  return (
    <main>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type Your Name"
      ></input>

      <button onClick={handleClick}> RESET </button>

      {/* Short Circuit Evaluation: only show h1 if there is a "name" input */}
      {name && <h1> Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById('root'));
