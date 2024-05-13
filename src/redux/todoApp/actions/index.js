export const ADD_TODO = 'ADD_TODO';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const REMOVE_TODO = 'REMOVE_TODO';


export const addTodo=(payload)=>{
    return{
        type: ADD_TODO,
        payload
    }
}

export const handleCheckbox=(payload)=>{
    return{
        type: UPDATE_CHECKBOX,
        payload
    }
}

export const removeTodo=(payload)=>{
    return{
        type: REMOVE_TODO,
        payload
    }
}