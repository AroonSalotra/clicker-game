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
import Header from './Header';
import Footer from './Footer';
import Background from './Background';

function App() {

  const [damage, setDamage] = useState(7)
  const [activeEnemy, setActiveEnemy] = useState(0)
  const [enemyHealth, setEnemyHealth] = useState(enemies[activeEnemy].health)
  const [gold, setGold] = useState(0)
  const [goldModifier, setGoldModifier] = useState(0.2)
  const [experience, setExperience] = useState(0)
  const [kills, setKills] = useState(0)
  // const [healthModifier, setHealthModifier] = useState(0)

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
        setKills(kills + 1)
        setEnemyHealth(health + kills)
        setGold(gold + (Math.round((health / 10) * goldModifier)))
        setExperience(experience + health / 2)
        // console.log(`HP: ${healthModifier}`)
      }
    }

    window.addEventListener("click", handlePress)

    return () => window.removeEventListener("click", handlePress)

  })


  // Save component states
  useEffect(() => {
    const getKills = window.localStorage.getItem("KILLS")
    // const getGold = window.localStorage.getItem("GOLD")
    const getGoldMod = window.localStorage.getItem("GOLDMOD")
    const getExperience = window.localStorage.getItem("EXP")

    const setState = (value, target, amount) =>
      value > (amount ? amount : 1) ? target(JSON.parse(value)) : null


    setState(getKills, setKills, 1);
    // setState(getGold, setGold);
    setState(getGoldMod, setGoldModifier)
    setState(getExperience, setExperience)
  }, [])

  useEffect(() => {
    window.localStorage.setItem("KILLS", kills)
    // window.localStorage.setItem("GOLD", gold)
    window.localStorage.setItem("GOLDMOD", goldModifier)
    window.localStorage.setItem("EXP", experience)
  }, [kills, gold, goldModifier, damage, experience])


  return (
    <>
      <Background imgUrl={"https://img.freepik.com/free-vector/abstract-pixel-rain-background_23-2148384633.jpg?t=st=1663150426~exp=1663151026~hmac=17b4ecb9f621be86314daa9b4e0ccefad97891be63ee0a0d79724190f1c0aab7"} />

      <div className="App">
        <Header />
        <Tracker
          health={enemyHealth} setHealth={setEnemyHealth}
          gold={gold} goldModifier={goldModifier} />

        <Enemy enemies={enemies} activeEnemy={activeEnemy} />

        <Experience
          goldModifier={goldModifier} setGoldModifier={setGoldModifier}
          experience={experience} setExperience={setExperience}
          kills={kills} damage={damage} />

        <Shop gold={gold} setGold={setGold}
          damage={damage} setDamage={setDamage} />

        <Footer />
      </div>

      {/* <Debug enemies={enemies} activeEnemy={activeEnemy} gold={gold}
        setGold={setGold} setEnemyHealth={setEnemyHealth}
        setDamage={setDamage} /> */}

    </>
  );
}

export default App;
