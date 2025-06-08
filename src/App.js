import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <h1 style={{color: '#C92071', textAlign: 'center', marginTop: '40px'}}>
          Página Funcionando!
        </h1>
      </main>
    </div>
  );
}

export default App;