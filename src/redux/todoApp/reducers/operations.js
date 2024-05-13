/* eslint-disable array-callback-return */
import { ADD_TODO, UPDATE_CHECKBOX } from "../actions";

const initialState=[
    {id: 1, todo: 'Sample Task 1', description: 'This is description of sample task one', completed: false},
    {id: 2, todo: 'Sample Task 2', description: 'This is description of sample task two', completed: false},
    {id: 3, todo: 'Sample Task 3', description: 'This is description of sample task three', completed: true},
];

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            // Add the new todo to the beginning of the array
            return [action.payload, ...state];

        case UPDATE_CHECKBOX:
            // Map through the todos and update the completed status
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

            // Separate completed and incomplete todos
            const completedTodos = updatedTodos.filter((item) => item.completed);
            const incompleteTodos = updatedTodos.filter((item) => !item.completed);

            // Combine incomplete and completed todos, placing completed todos at the bottom
            return [...incompleteTodos, ...completedTodos];

        default:
            return state;
    }
};
