import Menu from "../components/Menu";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Menu></Menu>
      {children}
      <footer>2020</footer>
    </>
  );
}
