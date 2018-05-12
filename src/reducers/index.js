import { combineReducers } from 'redux';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from "../constants/index";

const initialState = {
    todos: [
        {
            text: 'Consider using Redux',
            completed: true
        }, {
            text: 'Keep all state in a single tree',
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
                text: action.text,
                completed: false
            }
        ];
      case REMOVE_TODO:
        return state.filter((todo, index) => {
            if (index === action.index) {
                return false;
            }
        });
      case TOGGLE_TODO:
        return state.map((todo, index) => {
            if (index === action.index) {
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