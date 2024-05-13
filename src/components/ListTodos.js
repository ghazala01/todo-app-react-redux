import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { handleCheckbox } from '../redux/todoApp/actions';

export const ListTodos = ({handleEditClick, editFormVisibility}) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const todos = useSelector((state)=>state.operationsReducer);
  return todos.map((todo)=>(
    <div className='todoList mx-5 pt-2'>
      <div key={todo.id} className='d-flex flex-column mx-3'>
        <div className='d-flex align-items-start'>
          <input className='my-1' type='checkbox' checked={todo.completed} onChange={() => dispatch(handleCheckbox(todo.id))} />
          <div className='my-0 px-2'>
            <h6 style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {todo.todo}
            </h6>
            <p style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {todo.description}
            </p>
          </div>
        </div>
      </div>
    </div>

  ))
}