import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = () => {
    const [todoList, setTodoList] = useState(
        localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
    );

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === '') {
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        };

        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = '';
    };

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const toggle = (id) => {
        setTodoList((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        );
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div className="bg-white w-full sm:w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-lg mx-auto flex flex-col p-6 min-h-[550px] rounded-xl shadow-lg">
            {/* Title */}
            <div className="flex items-center mt-5 gap-2">
                <img className="w-8" src={todo_icon} alt="Todo Icon" />
                <h1 className="text-3xl font-semibold">To-Do List</h1>
            </div>

            {/* Input Box */}
            <div className="flex items-center my-5 bg-gray-200 rounded-full px-4">
                <input
                    ref={inputRef}
                    className="bg-transparent border-0 outline-none flex-1 h-12 pl-3 placeholder:text-slate-600 text-lg"
                    type="text"
                    placeholder="Add your task"
                />
                <button
                    onClick={add}
                    className="border-none rounded-full bg-orange-600 w-28 h-12 text-white text-lg font-medium hover:bg-orange-700 transition"
                >
                    ADD
                </button>
            </div>

            {/* Todo List */}
            <div className="flex flex-col gap-3">
                {todoList.map((item) => (
                    <TodoItems
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        isComplete={item.isComplete}
                        deleteTodo={deleteTodo}
                        toggle={toggle}
                    />
                ))}
            </div>
        </div>
    );
};

export default Todo;
