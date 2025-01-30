import { useState, useEffect } from 'react'
import Delayed from './assets/Delayed'
import data from './assets/data'
// import first from './assets/first.jpg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  
  console.log(data[2][count])

  return (
    <>
      <h2>Happy Valentine's Day My Bean!</h2>
      <div>
          <img src={data[2][count]} className="pic" alt="Vite logo" />
      </div>
      <div className="card">
        <Delayed waitBeforeShow={750}>
          <p>
            {data[0][count]}
          </p>
        </Delayed>
        <Delayed waitBeforeShow={2500}>
          <p>
            {data[1][count]}
          </p>
        </Delayed>
        <button onClick={() => setCount((count) => count + 1)}>
          Continue
        </button>
      </div>
    </>
  )
}

export default App
