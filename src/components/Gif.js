import { GifContainer } from "../blocks/gif-container";
import { Link } from "wouter";
import React from "react";

export default function Gif({ url, title, id }) {
  if (!url) {
    return <div> ups sorry no image</div>;
  }
  const path = `detail/${id}`;
  return (
    <GifContainer>
      <Link to={path}>
        <img src={url} alt={title} />
      </Link>

      <p>{title}</p>
    </GifContainer>
  );
}
