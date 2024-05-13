/* eslint-disable array-callback-return */
import { ADD_TODO, UPDATE_CHECKBOX, REMOVE_TODO } from "../actions";

const initialState=[
    {id: 1, todo: 'Sample Task 1', description: 'This is description of sample task one', completed: false},
    {id: 2, todo: 'Sample Task 2', description: 'This is description of sample task two', completed: false},
    {id: 3, todo: 'Sample Task 3', description: 'This is description of sample task three', completed: true},
];

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        // Add New Todo
        case ADD_TODO:
            return [action.payload, ...state];
        
        // Update Status of Completed Items
        case UPDATE_CHECKBOX:
            const updatedTodos = state.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                } else {
                    return item;
                }
            });

            const completedTodos = updatedTodos.filter((item) => item.completed);
            const incompleteTodos = updatedTodos.filter((item) => !item.completed);

            return [...incompleteTodos, ...completedTodos];
        
        // Delete Todo
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;

        default:
            return state;
    }
};
