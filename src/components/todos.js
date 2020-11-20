import React from 'react'
import Todo from './todo'

function todos({ todos, setTodos, filteredTodo }) {
    console.log(todos)
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodo.map(todo => (
                        <Todo setTodos={setTodos} todos={todos} todo={todo} text={todo.text} key={todo.id} />
                    ))}
            </ul>
            </div>
        </div>
    )
}

export default todos
