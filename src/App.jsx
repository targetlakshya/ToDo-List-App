import { useState, useEffect } from 'react'
import {TodoProvider} from './Contexts'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => { // addTodo is a function that takes todo as an argument and add a new todo to the todos array
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => { // updateTodo is a function that takes id and todo as an argument and update the todo with the given id
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => { // deleteTodo is a function that takes id as an argument and delete the todo with the given id
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => { // toggleComplete is a function that takes id as an argument and toggle the completed status of the todo with the given id
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => { // useEffect is a hook that takes a function as an argument and runs the function after the component is rendered
    const todos = JSON.parse(localStorage.getItem('todos')) // todos is a variable that holds the value of the todos array from the local storage
    if (todos && todos.length > 0) {
      setTodos(todos) 
    }
  }, [])

  useEffect(() => { // useEffect is a hook that takes a function as an argument and runs the function after the component is rendered
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App