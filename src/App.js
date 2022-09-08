import logo from './logo.svg';
import './App.css';
import HealthBar from './HealthBar';
import Enemy from './Enemy';
import { useState, useEffect } from 'react';
import enemies from "./data/enemies"
import Gold from './Gold';
import Tracker from './Tracker';
import Shop from './Shop';
import Debug from './Debug';
import Experience from './Experience';

function App() {

  const [damage, setDamage] = useState(7)
  const [activeEnemy, setActiveEnemy] = useState(0)
  const [enemyHealth, setEnemyHealth] = useState(enemies[activeEnemy].health)
  const [gold, setGold] = useState(0)
  const [goldModifier, setGoldModifier] = useState(1)
  const [experience, setExperience] = useState(99)


  // const handleClick = () => {
  //   setEnemyHealth(enemies[activeEnemy].health)
  //   setGold(0)
  // }

  // Attack function
  useEffect(() => {
    const min = Math.ceil(0);
    const max = Math.floor(enemies.length);

    const handlePress = (e) => {
      const target = e.target.id;
      const { health } = enemies[activeEnemy]

      if (target === "enemy" && enemyHealth >= damage) {
        setEnemyHealth(enemyHealth - damage)
      } else if (target === "enemy" && enemyHealth <= damage) {
        setActiveEnemy(Math.floor(Math.random() * (max - min) + min))
        setEnemyHealth(health)
        // setGold(gold + Math.round(health / 10))
        setGold(gold + (Math.round(health / 10)) * goldModifier)
        setExperience(experience + health / 2)
      }
    }


    // console.log(activeEnemy)
    console.log(`CURRENT DMG: ${damage} CURRENT EXP: ${experience}`)

    window.addEventListener("click", handlePress)

    return () => window.removeEventListener("click", handlePress)
  })

  return (
    <div className="App">
      <Tracker
        health={enemyHealth} setHealth={setEnemyHealth}
        damage={damage} setDamage={setDamage}
        gold={gold}
      />
      <Enemy enemies={enemies} activeEnemy={activeEnemy}
      />
      <Shop gold={gold} setGold={setGold}
        damage={damage} setDamage={setDamage}
      />
      <Debug enemies={enemies} activeEnemy={activeEnemy}
        setGold={setGold} setEnemyHealth={setEnemyHealth}
      />
      <Experience
        goldModifier={goldModifier} setGoldModifier={setGoldModifier}
        experience={experience} setExperience={setExperience}

      />
    </div>
  );
}

export default App;
