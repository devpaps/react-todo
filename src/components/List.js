import React from "react";
import { FiEdit, FiCheck, FiTrash } from "react-icons/fi";

function List({ todo, completeTodo, deleteTodo, updateTodo }) {
  return todo.map((todo, index) => (
    <div
      className="m-5 sm:flex sm:justify-between sm:block sm:my-10"
      key={index}
    >
      <div
        className="todo mtk6 sm:mb-0 mb-3 self-center"
        style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
      >
        <p className="mtk5 text-center sm:text-left text-2xl break-words">
          {todo.text}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div style={{ margin: "0 0.5em" }}>
          <button
            className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            onClick={() => completeTodo(index)}
          >
            <FiCheck style={{ marginRight: "0.5em" }} />
            Complete
          </button>
        </div>
        <div style={{ margin: "0 0.5em" }}>
          <button
            className="bg-white text-gray-800 font-bold rounded border-b-2 border-yellow-500 hover:border-yellow-600 hover:bg-yellow-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            onClick={() => updateTodo(todo, index)}
          >
            <FiEdit style={{ marginRight: "0.5em" }} />
            Update
          </button>
        </div>
        <div style={{ margin: "0 0.5em" }}>
          <button
            className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
            onClick={() => deleteTodo(index)}
          >
            <FiTrash style={{ marginRight: "0.5em" }} />
            Delete
          </button>
        </div>
      </div>
    </div>
  ));
}

export default List;
