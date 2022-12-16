import React from "react";
import { Router } from "@reach/router";

import Home from "./Home.js";
import Header from "./elements/Header.js";
import NotFound from "./NotFound";
import Movie from "./Movie";

import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </>
);
export default App;
