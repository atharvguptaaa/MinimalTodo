import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };
    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div
            className={`flex items-center border border-[#cca8ff] rounded-lg px-3 py-2 gap-3 shadow-md ${
                todo.completed ? 'bg-[#9b9be3] text-[#2D7555]' : 'bg-white text-[#4D4D4D]'
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer accent-pink-300 "
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full rounded-lg px-2 ${
                    isTodoEditable ? 'border-[#cca8ff]' : 'border-transparent'
                } ${todo.completed ? 'line-through bg-[#c2c2ff]' : '' } text-[#BF5F82]`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-[#cca8ff] justify-center items-center bg-white hover:bg-[#cca8ff] text-[#BF5F82] transition-colors duration-200 focus:outline-none"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? '💼' : '✍🏼'}
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-[#cca8ff] justify-center items-center bg-white hover:bg-[#cca8ff] text-[#BF5F82] transition-colors duration-200 focus:outline-none"
                onClick={() => deleteTodo(todo.id)}
            >
                ✖️
            </button>
        </div>
    );
}

export default TodoItem;