import './index.css';
import { useState } from "react"
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import React from "react"

function App() {
    const[showAddTask, setShowAddTask] = useState(false)
    const[tasks, setTasks] = useState([
      {
          id:1,
          name:'Doctors Appointment',
          date: 'feb 5th at 2:30pm',
          reminder: true,

      },
      {
          id:2,
          name:'Meeting at School',
          date: 'feb 6th at 1:30pm',
          reminder: true,

      },
      {
          id:3,
          name:'Dinner with Mom',
          date: 'feb 8th at 7:30pm',
          reminder: false,

      },
    ])

    const add = () => {
      setShowAddTask(!showAddTask)
    }

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    // Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
      console.log(task)
    }

  return (
    <div className='container'>
      <Header title='Task Master' add={add} showAddTask={showAddTask}/>
      { showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'There are no current tasks'}
    </div>
  );
}

export default App;
