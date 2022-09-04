import logo from './logo.svg';
import './App.css';
import HealthBar from './HealthBar';
import Enemy from './Enemy';
import { useState } from 'react';

function App() {
  const [health, setHealth] = useState(100)
  const [damage, setDamage] = useState(7)
  return (
    <div className="App">
      <HealthBar
        health={health} setHealth={setHealth}
        damage={damage} setDamage={setDamage}
      />
      <Enemy />
    </div>
  );
}

export default App;
