import { Link } from "wouter";
import Menul from "../blocks/menul";
import React from "react";

export default function Menu() {
  return (
    <Menul>
      <li>
        <Link to="/home">Search</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </Menul>
  );
}
