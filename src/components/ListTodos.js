import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleCheckbox, removeTodo } from '../redux/todoApp/actions';
import { Icon } from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash';

export const ListTodos = ({ handleEditClick, editFormVisibility }) => {
  const dispatch = useDispatch();

  // getting todos from the store
  const todos = useSelector((state) => state.operationsReducer);

  return (
    <>
      {todos.map((todo) => (
        <div className='todoList d-flex justify-content-between mx-5 pt-2 px-3' key={todo.id}>
          <div className='d-flex align-items-start'>
            <input
              className='my-1'
              type='checkbox'
              checked={todo.completed}
              onChange={() => dispatch(handleCheckbox(todo.id))}
            />
            <div className='my-0 px-2'>
              <h6 style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {todo.todo}
              </h6>
              <p style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {todo.description}
              </p>
            </div>
          </div>
          <div>
            <span onClick={() => dispatch(removeTodo(todo.id))}>
              <Icon icon={trash} style={{ color: '#D98326', cursor: 'pointer' }} />
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
