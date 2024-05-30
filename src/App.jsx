import { useEffect, useState } from 'react';
import './App.css';
import { TodoProvider } from './contexts';
import { TodoForm, TodoItem } from './component';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{ ...todo }, ...prev]);
    };
    const updateTodo = (id, todo) => {
        setTodos((prev) =>
            prev.map((eachPrev) => (eachPrev.id === id ? { ...eachPrev, todo: todo.todo } : eachPrev))
        );
    };
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((eachPrev) => eachPrev.id !== id));
    };
    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((eachTodo) =>
                eachTodo.id === id ? { ...eachTodo, completed: !eachTodo.completed } : eachTodo
            )
        );
    };

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));

        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className="bg-[#4c4c97] min-h-screen py-8 flex justify-center items-center font-mono">
                <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg px-4 py-6 bg-white">
                    <h1 className="text-3xl font-mono font-semibold text-center mb-8 text-[#1e132d]">
                        Manage Your Todos
                    </h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-col gap-4">
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;