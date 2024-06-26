import { useState } from 'react';

export default function Forme() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  return (
    <>
      <label>
        Score: <b>{player.score}</b>
        <button
          onClick={() => {
            setPlayer({
              ...player,
              score: player.score + 100,
            });
            console.log(player.score);
          }}
        >
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={(e) => {
            setPlayer({ ...player, firstName: e.target.value });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={(e) => {
            setPlayer({ ...player, lastName: e.target.value });
          }}
        />
      </label>
    </>
  );
}
