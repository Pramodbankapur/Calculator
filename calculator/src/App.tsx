import Calculator from "./ui/CalculatorUi"
import style from './App.module.css'
import { useState } from "react"

function App() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <>
      <div className={`${style.page} ${dark ? style.dark : ""}`}>
        
        <button
          className={style.themeToggle}
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          <span className={style.sun}>☀️</span>
          <span className={style.moon}>🌙</span>
        </button>

        <Calculator />
      </div>
    </>
  )
}

export default App
