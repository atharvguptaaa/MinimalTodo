import React from 'react'
import { useTodo } from '../contexts';
import { useState } from 'react';

function TodoForm() {
    const [todoMsg, setTodoMsg] = useState("")
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault()
        if(!todoMsg) return

        addTodo({id:Date.now(),todo:todoMsg,completed: false})
        setTodoMsg("")
    }

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMsg}
                onChange={(e)=>setTodoMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

