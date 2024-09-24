import React from 'react';
import NotesList from './components/NotesList';
import './App.css';
import CreateNote from './CreateNote';

function App() {
  return (
    <div className="App">
      <h1>Buddy Notes</h1>
      <NotesList />
      <CreateNote />
    </div>
  );
}

export default App;