import React from "react"
import Button from "./Button"

const Header = ({title, add, showAddTask}) => {
  return (
    <div className="header">
      <div style={{fontWeight:600}}>{title}</div>
    <Button text='Add' add={add} showAddTask={showAddTask}/>
    </div>
  )
}

export default Header