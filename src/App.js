import logo from './logo.svg';
import './App.css';
import HealthBar from './HealthBar';
import Enemy from './Enemy';
import { useState, useEffect } from 'react';
import enemies from "./data/enemies"

function App() {

  const [damage, setDamage] = useState(7)
  const [activeEnemy, setactiveEnemy] = useState(0)
  const [health, setHealth] = useState(enemies[activeEnemy].health)


  const handleClick = () => {
    setHealth(100)
  }

  // Attack function
  useEffect(() => {
    const min = Math.ceil(0);
    const max = Math.floor(enemies.length);

    const handlePress = (e) => {
      const target = e.target.id;
      if (target === "activeEnemy" && health > damage) {
        setHealth(health - damage)
      } else {
        setactiveEnemy(Math.floor(Math.random() * (max - min) + min))
        setHealth(enemies[activeEnemy].health)
      }
    }

    console.log(activeEnemy)

    window.addEventListener("click", handlePress)

    return () => window.removeEventListener("click", handlePress)
  })

  return (
    <div className="App">
      <HealthBar
        health={health} setHealth={setHealth}
        damage={damage} setDamage={setDamage}
      />
      <Enemy enemies={enemies} activeEnemy={activeEnemy} />
      <button onClick={() => handleClick()}>Reset</button>

    </div>
  );
}

export default App;
