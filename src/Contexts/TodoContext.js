import {createContext, useContext} from "react"

export const TodoContext = createContext({ // TodoContext show the default value of the context
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {}, // addTodo is a function that takes todo as an argument and returns nothing
    updateTodo: (id, todo) => {}, // updateTodo is a function that takes id and todo as an argument and returns nothing
    deleteTodo: (id) => {}, // deleteTodo is a function that takes id as an argument and returns nothing
    toggleComplete: (id) => {} // toggleComplete is a function that takes id as an argument and returns nothing
})


export const useTodo = () => { // useTodo is a custom hook that returns the current value of the context
    return useContext(TodoContext) // useContext is a hook that returns the current value of the context
} 

export const TodoProvider = TodoContext.Provider