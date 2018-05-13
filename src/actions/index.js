import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "../constants/index";

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

export const setVisibilityFilter = filter => ({ 
    type: SET_VISIBILITY_FILTER, 
    filter
});