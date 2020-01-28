import React from 'react';
import Summary from "./Summary";
import TodoList from "./TodoList";
import "./app.css";
import AddTodo from "./AddTodo";
import store from "./reduxStore";
import {Provider, useDispatch} from "react-redux";
import { render } from "react-dom";
import ArchivedTodoListContainer from "./ArchivedTodoListContainer";
import {archiveTodoAction} from "./todoActions";


const App = () => {
    const [todos, setTodos] = React.useState([]);

    const addTodo = (id, description) => {
        const newTodos = [...todos, {id, description, completed: false}];
        setTodos(newTodos);
    };

    const dispatch = useDispatch();

    const archiveTodoItem = id => {
        dispatch(archiveTodoAction(todos.filter(t => t.id === id)[0].description));
        setTodos(todos => todos.filter(t => t.id !== id));
    };

    return (
        <div className="app">
            <h1>My todo app</h1>
            <AddTodo addTodo={addTodo} todos={todos}/>
            <Summary todosCount={5} completedTodosCount={2}/>
            <TodoList
                todoItems={todos}
                archiveTodo={archiveTodoItem}
            />
            <ArchivedTodoListContainer archiveTodo={() => {}}/>
        </div>
    );
};


export default App;
