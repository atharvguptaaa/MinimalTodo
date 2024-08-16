import React from 'react';
import { useTodo } from '../contexts';
import { useState } from 'react';

export function TodoForm() {
    const [todoMsg, setTodoMsg] = useState('');
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();
        if (!todoMsg) return;

        addTodo({ id: Date.now(), todo: todoMsg, completed: false });
        setTodoMsg('');
    };

    return (
        <form onSubmit={add} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-[#1e132d] rounded-lg sm:rounded-l-lg sm:rounded-r-none px-3 outline-none duration-150 bg-white py-2 text-[#4D4D4D] placeholder-[#BF5F82] focus:ring-[#BF5F82] focus:border-[#BF5F82]"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
            />
            <button type="submit" className="w-full sm:w-auto rounded-lg sm:rounded-r-lg sm:rounded-l-none px-4 py-2 bg-[#1e132d] text-white border border-[#1e132d] hover:bg-[#4c4c97] hover:border-[#4c4c97]">
                Add
            </button>
        </form>
    );
}


