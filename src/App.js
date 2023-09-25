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
          name:'Parent Teachers Meeting',
          date: 'feb 25th at 10:30am',
          reminder: true,

      },
      {
          id:2,
          name:'Doctors Appointment',
          date: 'Jul 6th at 3:00pm',
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
    <div className='all-container'>
      <div className="container">
        <Header title='twoDoo' add={add} showAddTask={showAddTask}/>
        <AddTask onAdd={addTask}/>
      </div>
      <div className="container-two">
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'There are no current tasks'}
      </div>
    </div>
    
  );
}

export default App;
