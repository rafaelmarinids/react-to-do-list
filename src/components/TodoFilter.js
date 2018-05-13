import React, { Component } from "react";
import { connect } from "react-redux";
import { VisibilityFilters } from "../constants/index";
import { setVisibilityFilter } from "../actions/index";
import "./TodoFilter.scss";

const mapStateToProps = state => {
    return { 
        visibilityFilter: state.visibilityFilter 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
    };
};

class TodoFilter extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        this.props.setVisibilityFilter(event.target.id);
    }

    render() {
        return (
            <div className="TodoFilter">
                <span>Filtrar por:</span>
                <a id={VisibilityFilters.SHOW_ALL} 
                    href="#" 
                    title="Todos" 
                    className={this.props.visibilityFilter === VisibilityFilters.SHOW_ALL ? "TodoFilter-botao selecionado" : "TodoFilter-botao"}
                    onClick={this.handleClick}>
                    Todos
                </a>
                <a id={VisibilityFilters.SHOW_COMPLETED} 
                    href="#" 
                    title="Completados" 
                    className={this.props.visibilityFilter === VisibilityFilters.SHOW_COMPLETED ? "TodoFilter-botao selecionado" : "TodoFilter-botao"}
                    onClick={this.handleClick}>
                    Completados
                </a>
            </div>
        );
    }
}

const TodoFilterConnected = connect(mapStateToProps, mapDispatchToProps)(TodoFilter);

export default TodoFilterConnected;