import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants/index";

export const addTodo = text => ({ 
    type: ADD_TODO, 
    text //Payload
});

export const removeTodo = index => ({ 
    type: REMOVE_TODO, 
    index
});

export const toogleTodo = index => ({ 
    type: TOGGLE_TODO, 
    index
});