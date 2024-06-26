import { useState, useRef } from 'react';
import './App.css';

export default function App() {
  const [todos, settodo] = useState([]);
  const inputRef = useRef();

  const handelAdd = () => {
    const text = inputRef.current.value.trim(); // Remove leading/trailing whitespace
    if (text === '') return; // Ignore empty input
    const newItem = { name: text, completed: false };
    settodo([...todos, newItem]);
    inputRef.current.value = '';
  };
  function done(i) {
    const newTod = [...todos];
    newTod[i].complated = !newTod[i].complated;
    settodo(newTod);
  }

  function deletitem(i) {
    const newTod = [...todos];
    newTod.splice(i, 1);
    settodo(newTod);
  }

  const todo = todos.map((e, index) => {
    return (
      <div key={e.id}>
        <div className={'myitem'}>
          <li
            onClick={() => {
              done(index);
            }}
            className={e.complated ? 'done' : 'notdone'}
          >
            {e.name}
          </li>
          <span
            onClick={() => {
              deletitem(index);
            }}
          >
            x
          </span>
        </div>
      </div>
    );
  });
  return (
    <div className={'main'}>
      <div className={'box'}>
        <div className="inputSection">
          <h1> my list to do </h1>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter your Action... "
          />
          <button onClick={handelAdd}>add</button>
        </div>

        <div className="mydiv">
          <div>
            <ul>
              <li>{todo}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
