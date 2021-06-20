import React from 'react'
import { TextField, Button } from '@material-ui/core';
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { addTodo } from '../features/todo/todoSlice'
import '../styles/header.css'

const Header:React.FC = () => {

    const TodoList = useAppSelector((state) => state.todo)
    const dispatch = useAppDispatch()
    const [item, setItem] = React.useState<string>("")

    const handleAdd = (): void => {
        const obj = {
          id: TodoList.length+1,
          title: item
        }
        dispatch(addTodo(obj))
    }

    return (
      <div className="header">
        <h2>Welcome</h2>
        <h3>To get started, add some items to your list</h3>
        <div className="add-bar">
          <TextField 
          onChange={(e) => setItem(e.target.value)}
          id="outlined-basic" 
          label="I want to do..." 
          variant="outlined" />
          <div className="add-button">  
            <Button 
            onClick={handleAdd}
            variant="contained" 
            color="primary">Add</Button>
          </div>
        </div>
      </div>
    )
}

export default Header