import React from "react";
import SearchArea from "../blocks/searcharea";
import SearchInput from "../blocks/searchbox";

export default function Search({ filter, update }) {
  return (
    <SearchArea>
      <SearchInput value={filter} onChange={(e) => update(e.target.value)} />
    </SearchArea>
  );
}
