import { useRef, useState } from "react";

function App() {

  let [count, setCount] = useState(0);
  let countRef = useRef(0)
// Last 
let [error,seterror] = useState(false)
// Last 

  let handleClick=()=>{
      count++
      setCount(count)
  }

  // =============

  let handleClick2=()=>{
     console.log(countRef.current++)
    //  Last 
     if (countRef.current==5) {
      seterror(true)
     }
    //  Last 
  }
  return(
    <>
    {/* For useState  */}
    <h1>For useState</h1>
    <h2>{count}</h2>
    <button onClick={handleClick}>Click</button> 
    {/* For useState  */}



    {/* For Use Ref  */}

    <h1>For useRef</h1>
    {/* <h2 ref={countRef}>sadsad</h2> */}
    {/* <h2>sadsad</h2> */}
    <h2>{countRef.current}</h2>
    <button onClick={handleClick2}>Click</button> 
    {/* For Use Ref  */}

    {/* If User Last */}
    {error && <h1>Block For 5 Minutes</h1>}
    {/* If User  Last*/}
  </>
  )
  
}

export default App;
