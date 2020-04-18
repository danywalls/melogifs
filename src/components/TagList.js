import React from "react";
import Tag from "../blocks/tag";
import TagsContainer from "../blocks/tagscontainer";

export default function TagList({ update }) {
  const teentitans = ["Robin", "Chico bestia", "Starfire", "Raven", "Cybor"];
  return (
    <TagsContainer>
      {teentitans.map((titan) => (
        <Tag key={titan} onClick={(e) => update(titan)}>
          {titan}
        </Tag>
      ))}
    </TagsContainer>
  );
}
