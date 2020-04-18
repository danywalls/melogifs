import { Link } from "wouter";
import Menul from "../blocks/menul";
import React from "react";

export default function Menu() {
  return (
    <Menul>
      <h1>
        <Link to="/home">Search</Link>
      </h1>
    </Menul>
  );
}
