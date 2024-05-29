import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './component'

function App() {
  const [todos, setTodos] = useState([]) //all todos in this array

  const addTodo=(todo)=>{
    setTodos((prev)=>[{...todo},...prev])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((eachPrev)=>(eachPrev.id===id)?{...eachPrev,todo:todo}:eachPrev))
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((eachPrev)=>eachPrev.id!==id))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((eachTodo)=>(eachTodo.id===id)?{...eachTodo,completed: !eachTodo.completed }:eachTodo))
  }

useEffect(()=>{
const todos = JSON.parse(localStorage.getItem("todos"))//local storage means browser pe

if(todos&&todos.length>0){
  setTodos(todos) //when app will launch it will check if there were any todos, if yes then show them
}
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))//key and value
},[todos])


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
