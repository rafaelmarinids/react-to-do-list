import React, { Component } from "react";
import "./Todo.scss";

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li key={this.props.todo.key} className={this.props.todo.completed ? "Todo completo" : "Todo"}>
                <span>11/05/2018 às 21:02</span>
                <p>{this.props.todo.text}</p>
                <a href="#" title="" className="Todo-botao-completar">Completar</a>
                <a href="#" title="Excluir" className="Todo-botao-excluir">X</a>
            </li>
        );
    }
}

export default Todo;