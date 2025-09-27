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

const Task = ({onChange, text}) => {
  return (
      <p><input type='checkbox' onChange={onChange}/>{text}</p>
  )
}

const App = () => {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')
  // add state for completed tasks
  const [complete, setComplete] = useState([])
  
  const addTask = () => {
    setTasks([...tasks, {text: input, id: nextId++}])
    setInput('')
  }

  // find the id of the clicked checkbox
  const completeTask = (taskId) => {
    const item = tasks.find(item => item.id === taskId)
    // if the item id found is the same as the id of the clicked box, create a copied tasks array without that item 
    if (item) {
      const updatedTask = tasks.filter(item => item.id !== taskId)
      
    // update the new array
    setTasks(updatedTask)
    setComplete([...complete, item])
    console.log(complete)
    }

  }
  /* 
  const editTask = () => 
  const removeTask = () =>
  */

  return (
    <div>
      <Header text='New Task'/>
      <Title text='TITLE'/>
      {/* add the input to the tasks array */}
      <Button onClick={addTask} text='+' />
      <Input input={input} onChange={(e) => setInput(e.target.value)}/>
      <Title text='TASKS' />
      <ul>
        {tasks.map(task => <li key={task.id}><Task onChange={() => completeTask(task.id)} text={task.text}/></li>)}
      </ul>
      <Title text='COMPLETED TASKS' />
      <ul>
        {complete.map(task => <li key={task.id}>{task.text}</li>)}
      </ul>
    </div>
  )
}

export default App