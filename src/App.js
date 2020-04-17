import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const urlAPI =
    "https://api.giphy.com/v1/gifs/search?api_key=fdrhC4K8gCbiL9nGu0MlKblnRYbS3IEW&q=carmelo&limit=25&offset=0&rating=G&lang=en";
  const [gifs, setGifs] = useState([]);

  const ALTER_GIFS = [
    "https://media1.giphy.com/media/ZZTC9RP7cVYqw5MnXW/giphy.gif",
    "https://media2.giphy.com/media/mED0gOvnbDojRp2VMI/giphy.gif",
  ];
  useEffect(() => {
    fetch(urlAPI)
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        const gifs = data.map((image) => image.images.downsized_medium.url);
        setGifs(gifs);
      });
  }, []);
  return (
    <div className="App">
      {gifs.map((gif) => (
        <img src={gif} alt={gif} />
      ))}
      {/* <button onClick={() => setGifs(ALTER_GIFS)}>Change </button> */}
    </div>
  );
}

export default App;
