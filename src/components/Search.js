import React from "react";
import SearchArea from "../blocks/searcharea";
import SearchInput from "../blocks/searchinput";
import TagList from "./TagList";

export default function Search({ filter, update }) {
  return (
    <SearchArea>
      <SearchInput value={filter} onChange={(e) => update(e.target.value)} />
      <TagList update={update} />
    </SearchArea>
  );
}
