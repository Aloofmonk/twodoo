// import {FaTimes} from 'react-icons/fa'
import React from "react"

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder === true ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.name} <div style={{color:'red'}} onClick={() => onDelete(task.id)}/></h3>
        <p>{task.date}</p>
    </div>
  )
}

export default Task