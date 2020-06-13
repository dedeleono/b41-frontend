import React from 'react';
import Navigation from './components/Nav'
import Prueba from './components/prueba'
import AuthContextProvider from './contexts'

function App() {
  return (
    <React.Fragment>
      <AuthContextProvider>
        <Navigation />
        <h1>Que onda raza</h1>
      </AuthContextProvider>
    </React.Fragment>
  
  );
}

export default App;