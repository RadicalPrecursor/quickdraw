import React, { useState, useEffect } from 'react';
import { Atom } from './components/Atom';
import DrawAtom from './components/DrawAtom'
import './App.css';

const App: React.FC = () => {
  const [atoms, setAtoms] = useState<Atom[]>([]);
  const [selectedId, setSelectedId] = useState<number>(0);

  function initializeNewGame() {
    setAtoms([
      {id: 1, x: 200, y: 300}
    ])
  }

  useEffect(() => {
    initializeNewGame();
  }, [])

  return (
    <div className="App">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 800 600`}
      className="board">
        {atoms.map(atom => <DrawAtom key={atom.id} atom={atom} />)}
      </svg>
    </div>
  );
}

export default App;
