// import React ,{useState} from 'react'

// const App = () => {
//   const [num , setNum] = useState(0); 
 
//   const clickHandler = () => {
//      setNum(num+1);
//   }
//   const sub = () => {
//      setNum(num-1);
//   }
 
//   return (
//    <>
//      <button onClick={clickHandler}>+</button>
//      <div>ans is {num} </div>
//      <button onClick={sub}>-</button> 
//    </>
//   )
// }

// export default App

// timer-app
import React,{useState} from 'react'
import './App.css';
const App = () => {
  const [time , setTime] = useState(new Date().toLocaleTimeString())
  const updateTime = ()=>{
    setTime(new Date().toLocaleTimeString())
  }
  setInterval(updateTime,1000)
  return (
    <>
    <div class="wrapper">
     <div class="display">

        <div id="time">{time}</div>
     </div>
     
     <span></span>
     <span></span>
   </div>
     <button onClick={updateTime}>click here to update time</button>
    </>
  )
}

export default App