import React from 'react'

function todo({ text, todo, todos, setTodos }) { 
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completerHadler = () => {
        setTodos(todos.map((items) => {
            if (items.id === todo.id) {
                return {...items, completed : !items.completed}
            }
            return items
        }))
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completerHadler} className='complete-btn'><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
    )
}

export default todo
