import { useState, useEffect } from 'react'
import Delayed from './assets/Delayed'
import data from './assets/data'
// import first from './assets/first.jpg'
import './App.css'


// function counter(count) {
//   setCount=(count + 1)
//   console.log(count)
// }


function App() {
  const [count, setCount] = useState(0)


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
        {/* <button onClick={counter(count, setCount)}>
          next
        </button> */}
      </div>
    </>
  )
}

export default App
