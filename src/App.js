import logo from './logo.svg';
import './App.css';
import HealthBar from './HealthBar';
import Enemy from './Enemy';
import { useState, useEffect } from 'react';
import enemies from "./data/enemies"

function App() {

  const [damage, setDamage] = useState(7)
  const [enemy, setEnemy] = useState(0)
  const [health, setHealth] = useState(enemies[enemy].health)


  const handleClick = () => {
    setHealth(100)
  }

  // Attack function
  useEffect(() => {
    const min = Math.ceil(0);
    const max = Math.floor(enemies.length);

    const handlePress = (e) => {
      const target = e.target.id;
      if (target === "enemy" && health > damage) {
        setHealth(health - damage)
      } else {
        setEnemy(Math.floor(Math.random() * (max - min) + min))
        setHealth(enemies[enemy].health)
      }
    }

    console.log(enemy)

    window.addEventListener("click", handlePress)

    return () => window.removeEventListener("click", handlePress)
  })

  const activeEnemy = () => {
    const min = Math.ceil(0);
    const max = Math.floor(enemies.length);
    // console.log(Math.floor(Math.random() * (max - min) + min))

    if (health < 1) {
      setEnemy(Math.floor(Math.random() * (max - min) + min))
    }
  }



  return (
    <div className="App">
      <HealthBar
        health={health} setHealth={setHealth}
        damage={damage} setDamage={setDamage}
      />
      <Enemy enemies={enemies} />
      <button onClick={() => handleClick()}>Reset</button>

    </div>
  );
}

export default App;
