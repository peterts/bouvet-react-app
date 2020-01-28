const todosReducer = (archivedTodos = [], action) => {
    switch (action.type) {
        case "ARCHIVE_TODO":
            const newTodoId = String(archivedTodos.length + 1);
            return [...archivedTodos, {id: newTodoId, description: action.description}];
        default:
            return archivedTodos;
    }
};


export default todosReducer;