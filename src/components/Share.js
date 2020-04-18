import React from "react";
import SharedSocial from "../blocks/ShareSocial";

export default function Share({ text = "my favorite teentitans" } = {}) {
  const avatarURL = window.location;
  const twiterURL = `http://twitter.com/share?text=${text}&url=${avatarURL}`;
  return (
    <SharedSocial>
      <a rel="noopener noreferrer" target="_blank" href={twiterURL}>
        Share
      </a>
    </SharedSocial>
  );
}
