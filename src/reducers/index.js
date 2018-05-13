import { combineReducers } from 'redux';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from "../constants/index";

const now = new Date();
const after = new Date();
after.setSeconds(after.getSeconds() + 1);

const initialState = {
    todos: [
        {
            id: 1,
            date: now,
            text: 'Aprender React + Redux',
            completed: true
        }, {
            id: 2,
            date: after,
            text: 'Desenvolver um app "To Do List" em 1 semana',
            completed: false
        }
    ],
    visibilityFilter: VisibilityFilters.SHOW_ALL
};

const visibilityFilter = (state = initialState.visibilityFilter, action) => {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter;
      default:
        return state;
    }
};

const todos = (state = initialState.todos, action) => {
    switch (action.type) {
      case ADD_TODO:
        return [
            ...state,
            {
                id: action.payload.id,
                date: new Date(),
                text: action.payload.text,
                completed: false
            }
        ];
      case REMOVE_TODO:
        return state.filter((todo) => {
            if (todo.id !== action.id) {
                return true;
            }
        });
      case TOGGLE_TODO:
        return state.map((todo) => {
            if (todo.id === action.id) {
                return Object.assign({}, todo, { completed: !todo.completed });
            }

            return todo;
        });
      default:
        return state;
    }
};

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;