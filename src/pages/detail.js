import React, { useEffect, useState } from "react";

import { GifContainerBig } from "../blocks/gif-container";
import { getGifById } from "../services/getGifs";

export default function Detail(props) {
  const [gif, updateImageUrl] = useState("");
  const { id } = props.params;
  useEffect(() => {
    getGifById({ id }).then((response) => updateImageUrl(response));
  }, [id]);

  return (
    <GifContainerBig>
      <img src={gif.url} alt={gif.url} />
      <p>{gif.title}</p>
    </GifContainerBig>
  );
}
