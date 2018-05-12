import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import "./TodoInput.scss";

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => dispatch(addTodo(text))
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
            this.props.addTodo(text);

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

const Input = connect(null, mapDispatchToProps)(TodoInput);

export default Input;