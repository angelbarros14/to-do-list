import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Input = ({input, onChange}) => {
  return (
    <input type='text' value={input} onChange={onChange}></input>
  )
}

const App = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  console.log(tasks)
  const addTask = () => {
    setTasks([...tasks, {input: input}])
    console.log('clicked')
    setInput('')
  }

  // const addTask = () => 
  // const completeTask = () => 
  // const editTask = () => 
  // const removeTask = () =>

  return (
    <div>
    <Header text='New Task'/>
    {/* add the input to the tasks array */}
    <Button onClick={addTask} text='+' />
    <Input input={input} onChange={(e) => setInput(e.target.value)}/>
    
    </div>
  )
}

export default App