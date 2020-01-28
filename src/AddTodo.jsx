import React from 'react';
import PropTypes from 'prop-types';


const AddTodo = ({ addTodo }) => {
    const  [value, setValue] = React.useState("");

    const generateId = () => "_" + Math.random().toString(36).substr(2,9);

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(generateId(), value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );

};


AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};


export default AddTodo;
