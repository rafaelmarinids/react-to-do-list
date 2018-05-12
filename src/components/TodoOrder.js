import React, { Component } from "react";
import "./TodoOrder.scss";

class TodoOrder extends Component {
    render() {
        return (
            <div className="TodoOrder">
                <span>Ordernar por:</span>
                <select>
                    <option value="recentes">Mais recentes</option>
                    <option value="antigas">Mais antigas</option>
                </select>
            </div>
        );
    }
}

export default TodoOrder;