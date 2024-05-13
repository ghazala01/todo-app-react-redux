import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoApp/actions';

export const AddTodo = () => {

  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // todo value state for normal add todo form
  const [todoTitleValue, setTodoTitleValue] = useState('');
  const [todoDescriptionValue, setTodoDescriptionValue] = useState('');

  // normal add todo submit
  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoTitleValue,
          description: todoDescriptionValue,
          completed: false
      }
      setTodoTitleValue('');
      setTodoDescriptionValue('');
      dispatch(addTodo(todoObj))
  }

  

  return (
    <>
        <form className='addTodo-form form-group d-flex flex-column rounded-3 mx-5 my-5 px-2 pt-2 pb-4' onSubmit={handleSubmit}>
          <h6 className="addTodo-heading">Add your todo-items</h6>
          <div className='d-flex flex-column gap-2 mt-2'>
              <input type="text" className='form-control' placeholder='Enter title' required
              value={todoTitleValue} onChange={(e)=>setTodoTitleValue(e.target.value)}/>
              <textarea className='form-control' placeholder='Enter description'
              value={todoDescriptionValue} onChange={(e)=>setTodoDescriptionValue(e.target.value)}/>
              <button type="submit" className='btn btn-secondary btn-md rounded-5'>ADD</button>
          </div>
        </form>
    </>
  )
}