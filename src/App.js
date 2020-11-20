import React, {useState, useEffect} from 'react'
import './App.css';
import Input from './components/inputs'
import Todos from './components/todos'

function App() {

  // states

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodo, setFilteredTodo] = useState([])
// effects
  // run only once
  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filter])

  const filterHandler = () =>{
    switch (filter) {
      case 'completed':
        setFilteredTodo(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodo(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodo(todos)
    }
  }

// save local todos 
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  // get local todos
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      const local = JSON.parse(localStorage.getItem('todos'))
      setTodos(local)
    }    
  }

  return (
    <div className="App">
      <header>
        <h1>Allan's Todo</h1>
      </header>
      <Input setFilter={setFilter}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText} />
      <Todos filteredTodo={filteredTodo}
        setTodos={setTodos}
        todos={todos} />
    </div>
  );
}

export default App;
