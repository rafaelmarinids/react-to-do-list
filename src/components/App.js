import React, { Component } from "react";
import logo from "../../assets/logo.png";
import "./App.scss";
import TodoInput from "./TodoInput.js";
import TodoList from "./TodoList.js";
import TodoFilter from "./TodoFilter.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    TODO<span>List</span>
                    <a href="#" title="iClinic"><img src={logo} /></a>
                </header>
                <main>
                    <TodoInput />
                    <TodoList />
                    <TodoFilter />
                </main>
                <footer>
                    Desenvolvido por Rafael Marini de Souza
                </footer>
            </div>
        );
    }
}

export default App;