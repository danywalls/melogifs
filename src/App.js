import React, { useState } from "react";
import "./App.css";

function App() {
  const [gifs, setGifs] = useState([
    "https://media1.giphy.com/media/fAQHjEYDT9GweWIcBq/giphy.gif?cid=ecf05e474c6593ae881a2d64be691d80cfc16d637bfcf78d&rid=giphy.gif",
    "https://media2.giphy.com/media/gfGvtlxqgYKIEqSEdE/giphy.gif",
  ]);

  const ALTER_GIFS = [
    "https://media1.giphy.com/media/ZZTC9RP7cVYqw5MnXW/giphy.gif",
    "https://media2.giphy.com/media/mED0gOvnbDojRp2VMI/giphy.gif",
  ];

  return (
    <div className="App">
      {gifs.map((gif) => (
        <img src={gif} alt={gif} />
      ))}
      <button onClick={() => setGifs(ALTER_GIFS)}>Change </button>
    </div>
  );
}

export default App;
