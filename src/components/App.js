import React, { Component } from "react";
import logo from "../../assets/logo.png";
import "./App.scss";
import TodoInput from "./TodoInput.js"
import TodoOrder from "./TodoOrder.js"
import TodoList from "./TodoList.js"

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
                    <TodoOrder />
                    <TodoList />
                </main>
                <footer></footer>
            </div>
        );
    }
}

export default App;