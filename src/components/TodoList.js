import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo.js";

const mapStateToProps = state => {
    return { 
        todos: state.todos 
    };
};

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listTodos = this.props.todos.map((todo) => 
            <Todo todo={todo} />
        );

        return (
            <ul>
                {listTodos}
            </ul>
        );
    }
}

const List = connect(mapStateToProps)(TodoList);

export default List;