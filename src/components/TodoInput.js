import React, { Component } from "react";
import "./TodoInput.scss";

class TodoInput extends Component {
    render() {
        return (
            <input type="text" placeholder="O que precisa ser feito?" autoFocus className="TodoInput" />
        );
    }
}

export default TodoInput;