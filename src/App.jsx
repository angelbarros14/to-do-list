import { useState } from 'react'

let nextId = 0

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Title = ({text}) => {
  return (
    <h4>{text}</h4>
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
  // add state for completed tasks
  const [complete, setComplete] = useState([])

  console.log(tasks)
  
  const addTask = () => {
    setTasks([...tasks, {text: input, id: nextId++}])
    console.log('clicked')
    setInput('')
  }

  const completeTask = () => {
    setComplete([...complete, {text: tasks.text, id: tasks.id}])
  }

  // const completeTask = () => 
  // const editTask = () => 
  // const removeTask = () =>

  return (
    <div>
    <Header text='New Task'/>
    <Title text='TITLE'/>
    {/* add the input to the tasks array */}
    <Button onClick={addTask} text='+' />
    <Input input={input} onChange={(e) => setInput(e.target.value)}/>
    <Title text='TASKS'/>
    <ul>{tasks.map(task => (<li key={task.id}>{task.text}</li>))}</ul>

    
    </div>
  )
}

export default App