import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/Global';
import Routes from './routes';
import { FakeAuthProvider } from './hooks/fakeAuth';

const App: React.FC = () => (
  <Router>
    <FakeAuthProvider>
      <Routes />
    </FakeAuthProvider>
    <GlobalStyles />
  </Router>
);

export default App;
