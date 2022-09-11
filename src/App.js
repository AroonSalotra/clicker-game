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
  const [goldModifier, setGoldModifier] = useState(0.2)
  const [experience, setExperience] = useState(0)
  const [kills, setKills] = useState(0)


  // Attack function
  useEffect(() => {
    const min = Math.ceil(0);
    const max = Math.floor(enemies.length);
    let healthModifier = 0;

    const handlePress = (e) => {
      const target = e.target.id;
      const { health } = enemies[activeEnemy]

      if (target === "enemy" && enemyHealth >= damage) {
        setEnemyHealth(enemyHealth - damage)
      } else if (target === "enemy" && enemyHealth <= damage) {
        setActiveEnemy(Math.floor(Math.random() * (max - min) + min))
        setKills(kills + 1)
        setEnemyHealth(health + healthModifier)
        setGold(gold + (Math.round((health / 10) * goldModifier)))
        setExperience(experience + health / 2)
      }
    }


    if (kills > 0 && kills % 10 === 0) {
      console.log("YES")
      healthModifier += kills
    }

    window.addEventListener("click", handlePress)

    return () => window.removeEventListener("click", handlePress)
  })

  // useEffect(() => {
  //   let int = 0;
  //   console.log("true")
  //   int += 10;

  //   if (int > 9) {
  //     console.log("YES")

  //     int = 0;
  //   }
  // }, [kills > 9])

  return (
    <>
      <div className="App">
        <Tracker
          health={enemyHealth} setHealth={setEnemyHealth}
          damage={damage} setDamage={setDamage}
          gold={gold} goldModifier={goldModifier} />

        <Enemy enemies={enemies} activeEnemy={activeEnemy} />

        <Experience
          goldModifier={goldModifier} setGoldModifier={setGoldModifier}
          experience={experience} setExperience={setExperience}
          kills={kills} />

        <Shop gold={gold} setGold={setGold}
          damage={damage} setDamage={setDamage} />
      </div>

      <Debug enemies={enemies} activeEnemy={activeEnemy} gold={gold}
        setGold={setGold} setEnemyHealth={setEnemyHealth} />
    </>
  );
}

export default App;
