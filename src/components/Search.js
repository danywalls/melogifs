import React from "react";

export default function Search({ filter, update }) {
  return (
    <>
      <input
        type="text"
        id="browsers"
        value={filter}
        onChange={(e) => update(e.target.value)}
      />
    </>
  );
}
