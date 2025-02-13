import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2 w-full'>

        {/* Todo Text and Toggle Button */}
        <div
          onClick={() => toggle(id)}
          className='flex flex-1 items-center cursor-pointer'
        >
            <img
              className='w-5 sm:w-6 md:w-7'
              src={isComplete ? tick : not_tick}
              alt={isComplete ? "Completed" : "Not Completed"}
            />
            <p
              className={`text-slate-700 ml-2 sm:ml-4 text-sm sm:text-base md:text-[17px] decoration-slate-500 ${
                isComplete ? "line-through" : ""
              }`}
            >
              {text}
            </p>
        </div>

        {/* Delete Button */}
        <img
          onClick={() => deleteTodo(id)}
          className='w-3 sm:w-3.5 cursor-pointer'
          src={delete_icon}
          alt="Delete"
        />

    </div>
  );
};

export default TodoItems;
