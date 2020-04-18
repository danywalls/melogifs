import Gif from "./Gif";
import React from "react";

export default function Giflist({ gifs }) {
  return (
    <>
      {gifs.map((gif) => (
        <Gif title={gif.title} key={gif.id} id={gif.id} url={gif.url} />
      ))}
    </>
  );
}
