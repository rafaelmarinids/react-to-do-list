import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants/index";

export const addTodo = (id, text) => ({ 
    type: ADD_TODO, 
    payload: {
        id,
        text
    }
});

export const removeTodo = id => ({ 
    type: REMOVE_TODO, 
    id
});

export const toogleTodo = id => ({ 
    type: TOGGLE_TODO, 
    id
});