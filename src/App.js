import "./App.css";

import About from "./pages/about";
import Detail from "./pages/detail";
import Home from "./pages/home";
import Layout from "./container/layout";
import React from "react";
import { Route } from "wouter";

function App() {
  return (
    <Layout>
      <Route component={Home} path="/"></Route>
      <Route component={Home} path="/home"></Route>
      <Route component={About} path="/about"></Route>
      <Route component={Detail} path="/detail/:id"></Route>
    </Layout>
  );
}

export default App;
