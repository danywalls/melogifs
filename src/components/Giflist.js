import Gif from "./Gif";
import GifResult from "../blocks/gifsresults";
import React from "react";

export default function Giflist({ gifs }) {
  return (
    <GifResult>
      {gifs.map((gif) => (
        <Gif title={gif.title} key={gif.id} id={gif.id} url={gif.url} />
      ))}
    </GifResult>
  );
}
