import React from 'react';
import PropTypes from 'prop-types';
import "./todoItem.css";
import { ThemeContext } from "./themeContext";


const TodoItem = ({ id, description, archiveTodo }) => {
    const theme = React.useContext(ThemeContext);
    return (
        <div className="todo-item__container">
            <div className="todo-item__line">
                <input type="checkbox" id={`todoItemCheckbox-${id}`}/>
                <label htmlFor={`todoItemCheckbox-${id}`}>{description}</label>
            </div>
            <button
                type="button"
                onClick={() => archiveTodo(id)}
                style={{
                    backgroundColor: theme.background,
                    color: theme.foreground
                }}
            >
                Delete
            </button>
        </div>
    );
};


TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    removeTodo: PropTypes.func,
    archiveButton: PropTypes.func
};


export default TodoItem;