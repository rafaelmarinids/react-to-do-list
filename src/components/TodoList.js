import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo.js";
import { OrderOptions, VisibilityFilters } from "../constants/index";
import "./TodoOrder.scss";

const mapStateToProps = state => {
    return { 
        todos: state.todos,
        visibilityFilter: state.visibilityFilter 
    };
};

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {order: OrderOptions.MOST_RECENT};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ order: event.target.value });
    }

    render() {
        let todosOrdered = Array.from(this.props.todos);

        // Ordenacão
        if (this.state.order === OrderOptions.MOST_RECENT) {
            todosOrdered.reverse();
        }

        // Filtragem
        const todoList = todosOrdered.map((todo, index) => {
            if (this.props.visibilityFilter === VisibilityFilters.SHOW_ALL
                || (this.props.visibilityFilter === VisibilityFilters.SHOW_COMPLETED && todo.completed)) {
                return (
                    <Todo key={todo.id} todo={todo} />
                );
            }
        });

        return (
            <div>
                <div className="TodoOrder">
                    <span>Ordernar por:</span>
                    <select value={this.state.order} onChange={this.handleChange}>
                        <option value="MOST_RECENT">Mais recentes</option>
                        <option value="OLDER">Mais antigas</option>
                    </select>
                </div>
                <ul>
                    {todoList}
                </ul>
            </div>
        );
    }
}

const TodoListConnected = connect(mapStateToProps)(TodoList);

export default TodoListConnected;