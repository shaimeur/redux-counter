import './App.css'
import {  useSelector ,useDispatch} from 'react-redux'
function App() {
const counter = useSelector((state) => state.counter)
const disptach = useDispatch()
const increment = () =>{
    disptach({type:"INC"})
}
const decrement = () =>{
    disptach({type:"DEC"})
}
const reset = () =>{
  disptach({type:"RESET"})
}
const addByTen = () =>{
  disptach({type:"ADD_BY_10"})
}
const addBy = (amount)=>{
  disptach({type:"ADD_BY",payload : amount})
}
  return (
    <>
        <h1>Counter</h1>
             {counter}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>RESET</button>
        <button onClick={addByTen}>Add By 10</button>
        <button onClick={()=>addBy(100)}>Add By 100 </button>
    </>
  )
}

export default App
