import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";


const TodoList = ({ todoItems, archiveTodo }) => (
    <div>
        {todoItems.map(todoItem => (
            <TodoItem
                key={todoItem.id}
                id={todoItem.id}
                description={todoItem.description}
                archiveTodo={archiveTodo}
            />
        ))}
    </div>
);


TodoList.propTypes = {
    todoItems: PropTypes.array,
    archiveTodo: PropTypes.func.isRequired
};


TodoList.defaultProps = {
    todoItems: []
};


export default TodoList;