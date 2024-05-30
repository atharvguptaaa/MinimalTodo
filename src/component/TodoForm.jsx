import React from 'react';
import { useTodo } from '../contexts';
import { useState } from 'react';

function TodoForm() {
    const [todoMsg, setTodoMsg] = useState('');
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todoMsg) return;

        addTodo({ id: Date.now(), todo: todoMsg, completed: false });
        setTodoMsg('');
    };

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-[#1e132d] rounded-l-lg px-3 outline-none duration-150 bg-white py-2 text-[#4D4D4D] placeholder-[#BF5F82] focus:ring-[#BF5F82] focus:border-[#BF5F82]"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-4 py-2 bg-[#1e132d] text-white border border-[#1e132d] hover:bg-[#4c4c97] hover:border-[#4c4c97]">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
