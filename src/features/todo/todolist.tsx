import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import '../../styles/todolist.css'
import { removeTodo } from './todoSlice'

const TodoList:React.FC = () => {
  const todo = useAppSelector((state) => state.todo)
  const dispatch = useAppDispatch()
  console.log(todo);
  
  const handleDelete= (id: number):void => {
    console.log(id)
    dispatch(removeTodo(id))
    console.log(todo);

  }

  return(
    <div className="todolist">
      {todo.map(data => (
        <div key={data.id} className="todo-item">
          <div className="todo-title">
            <span className="todo-text">{data.title}</span>
          </div>
          <div className="todo-action">
            <DeleteIcon 
            className="bin-icon"
            onClick={() => handleDelete(data.id)} 
            color="action" />
          </div>
        </div>
      ))}
    </div>
  )
}
export default TodoList