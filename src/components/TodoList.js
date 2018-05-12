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
        const todoList = this.props.todos.map((todo, index) => 
            <Todo todo={todo} key={index} />
        );

        return (
            <ul>
                {todoList}
            </ul>
        );
    }
}

const List = connect(mapStateToProps)(TodoList);

export default List;