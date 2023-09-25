import { useState } from "react"
import React from "react"

const AddTask = ({onAdd}) => {

    const [name, setText] = useState('')
    const [date, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name){
            alert('Please add Task')
            return
        } else if(!date){
            alert('Please add Day')
            return
        } 
        onAdd({name, date, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form onSubmit={onSubmit} className="add-form">
        <div className="form-control">
            <label htmlFor="task">Task</label>
            <input type="text" name="task" placeholder="Add Task" value={name} onChange={(e) => setText((e.target.value))}/>
        </div>
        
        <div className="form-control"><label htmlFor="date">Add Day & Time</label>
        <input type="text" name="date" placeholder='Day & Time' value={date} onChange={(e) => setDay((e.target.value))}/></div>
        
        <div className="form-control form-control-check"> <label htmlFor="reminder">Set Reminder</label>
        <input type="checkbox" checked={reminder} name="reminder" value={reminder} onChange={(e) => setReminder((e.currentTarget.checked))}/></div>
       
        <div className="form-control"> <input type="submit"  value={'Submit'} style={{background:'black', color: 'whitesmoke'}} /></div>
    </form>
  )
}

export default AddTask