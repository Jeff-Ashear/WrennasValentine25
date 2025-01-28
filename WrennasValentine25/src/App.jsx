import { useState } from 'react'
import data from './assets/data'
import first from './assets/first.jpg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  
  console.log(data[2][count])


  // import data
  //handle data onclick using state
  //pass the data to the view

  return (
    <>
      <h2>Happy Valentine's Day My Bean!</h2>
      <div>
          <img src={data[2][count]} className="pic" alt="Vite logo" />
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
      </div>
      <div className="card">
        <p>
          {data[0][count]}
        </p>
        <p>
          {data[1][count]}
        </p>

        <button onClick={() => setCount((count) => count + 1)}>
          Continue
        </button>
      </div>
    </>
  )
}

export default App
