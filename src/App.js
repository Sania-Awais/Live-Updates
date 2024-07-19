import React from 'react';
import LiveUpdates from './components/liveupdates';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Live Updates</h1>
      </header>
      <main>
        <LiveUpdates />
      </main>
    </div>
  );
}

export default App;
