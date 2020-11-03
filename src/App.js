import React, { useEffect, useState } from "react";
import './App.scss';

function App() {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    const difference = +new Date(`12/25/${year}`) - +new Date()
    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60 * 24)) * 24 + Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    } else {
      timeLeft = {
        hours: '00',
        minutes: '00',
        seconds: '00'
      }
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [year] = useState(new Date().getFullYear())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })
  const timerComponents = []
  Object.keys(timeLeft).forEach((key) => {
    if (!timeLeft[key]) {
      return
    }
    timerComponents.push(
      <span key={key}>
        {timeLeft[key]} {key}{" "}
      </span>
    )
  })

  timerComponents.push(
    <span key="remaining-span">
      remaining
    </span>
  )

  return (
    <div>
      <div className="header">
        <div className="content">
          <h1>CHRISTMAS <span>{year}</span> AT POWr</h1>
          <h2>COMING SOON</h2>
          <div className="countdown">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
