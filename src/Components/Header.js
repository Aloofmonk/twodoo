import React from "react"
// import Button from "./Button"

const Header = ({title, add, showAddTask}) => {
  return (
    <div className="header">
      <div style={{fontWeight:600}}>{title}</div>
    </div>
  )
}

export default Header