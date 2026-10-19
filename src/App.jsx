import Navigation from './components/Navigation'
import Form from './components/Form'
import List from './components/List'
import DoneList from './components/DoneList'

import InitialTask from'./data.json'

import { useState } from 'react'


const App = () => {

  const [task, setTask] = useState(InitialTask)

  return (
    <div>
      <Navigation />
      <Form data = {task} setData = {setTask}/>
      <List data = {task} setData = {setTask}/>
      <DoneList data = {task}/>
    </div>
  )
}

export default App