import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTodo, toogleTodo } from "../actions/index";
import "./Todo.scss";

const mapDispatchToProps = dispatch => {
    return {
        removeTodo: id => dispatch(removeTodo(id)),
        toogleTodo: id => dispatch(toogleTodo(id))
    };
};

class Todo extends Component {
    constructor(props) {
        super(props);

        this.handleRemoveButtonClick = this.handleRemoveButtonClick.bind(this);
        this.handleCompletedButtonClick = this.handleCompletedButtonClick.bind(this);
    }

    handleRemoveButtonClick(event) {
        event.preventDefault();

        this.props.removeTodo(this.props.todo.id);
    }

    handleCompletedButtonClick(event) {
        event.preventDefault();

        this.props.toogleTodo(this.props.todo.id);
    }

    render() {
        return (
            <li className={this.props.todo.completed ? "Todo completo" : "Todo"}>
                <span>Inserido em {this.props.todo.date}</span>
                <p>{this.props.todo.text}</p>
                {!this.props.todo.completed && <a href="#" title="Completar" className="Todo-botao-completar" onClick={this.handleCompletedButtonClick}>Completar</a>}
                {this.props.todo.completed && <a href="#" title="Liberar" className="Todo-botao-liberar" onClick={this.handleCompletedButtonClick}>Liberar</a>}
                <a href="#" 
                    title="Excluir" 
                    className="Todo-botao-excluir"
                    onClick={this.handleRemoveButtonClick}>
                    X
                </a>
            </li>
        );
    }
}

const TodoConnected = connect(null, mapDispatchToProps)(Todo);

export default TodoConnected;