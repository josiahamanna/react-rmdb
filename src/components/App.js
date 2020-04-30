import React from 'react';
import Home from './Home.js';
import Header from './elements/Header.js';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
    <div>
      <Header />
      <Home />
      <GlobalStyle/>
    </div>
);
export default App;
