import React from "react"

const Button = ({text, add, showAddTask}) => {
  return (
    <div className="btn" style={ showAddTask === false ?{background:'blue'} : {background: 'orange'}} onClick={add}>{ showAddTask === false ? text : 'Close'}</div>
  )
}

export default Button