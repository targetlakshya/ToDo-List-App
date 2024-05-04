import React, { useState } from 'react'
import { useTodo } from '../Contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("") // todo is a state variable that holds the value of the input field and setTodo is a function that updates the value of the todo variable
    const {addTodo} = useTodo() // addTodo is a function that takes todo as an argument and returns nothing

    const add = (e) => { // add is a function that takes an event as an argument
      e.preventDefault() // preventDefault is a function that prevents the default behavior of the event

      if (!todo) return // if the todo is empty, return

      addTodo({ todo, completed: false}) // addTodo is a function that takes an object with todo and completed as keys and todo and false as values as an argument and returns nothing
      setTodo("") // setTodo is a function that updates the value of the todo variable to an empty string
    }

  return (
      <form onSubmit={add}  className="flex"> 
      {/*form is a form element that takes an event as an argument and returns nothing and has a class name of flex and onSubmit is an event that triggers the add function when the form is submitted  */}
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)} // onChange is an event that triggers the setTodo function when the value of the input field changes
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;