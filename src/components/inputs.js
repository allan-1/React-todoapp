import React from 'react';

function input({setFilter, setInputText, inputText, todos, setTodos}) {
    // jscode
    const inputTextHandler = (e) => {
        // console.log(e.target.value)
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ])
        setInputText("")
    }
    const filterHandler = (e) => {
        setFilter(e.target.value)
    }
    return (
        <div>
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
        </div>
    )
}

export default input