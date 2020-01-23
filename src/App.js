import React from 'react';
import Navigations from './Navigation';
import ContextsProvider from './context/contextsProvider';

const App = () => {
  return (
    <ContextsProvider>
      <Navigations />
    </ContextsProvider>
  )
};

export default App;
