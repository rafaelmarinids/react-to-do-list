import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTodo } from "../actions/index";
import "./TodoInput.scss";

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (id, text) => dispatch(addTodo(id, text))
    };
};

class TodoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();

        const { text } = this.state;

        if (text) {
            const uniqueId = uuidv1();

            this.props.addTodo(uniqueId, text);

            this.setState({ text: "" });
        }
    }

    render() {
        const { text } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    placeholder="O que precisa ser feito?" 
                    autoFocus={true}
                    className="TodoInput"
                    value={text}
                    onChange={this.handleChange} />
            </form>
        );
    }
}

const TodoInputConnected = connect(null, mapDispatchToProps)(TodoInput);

export default TodoInputConnected;