import React from "react";

function List({ todo, completeTodo, deleteTodo, updateTodo }) {
  return todo.map((todo, index) => (
    <div
      className="m-5 sm:flex sm:justify-between sm:block sm:my-10"
      key={index}
    >
      <div
        className="todo mtk6 sm:mb-0 mb-3"
        style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
      >
        <p className="mtk5">{todo.text}</p>
      </div>
      <div>
        <button
          className="mx-2 bg-green-600 hover:bg-green-700 text-white font-semibold hover:text-white py-2 px-4 border border-green-600 hover:border-transparent rounded"
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          className="mx-2 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold hover:text-black py-2 px-4 border border-yellow-600 hover:border-transparent rounded"
          onClick={() => updateTodo(todo, index)}
        >
          Update
        </button>
        <button
          className="mx-2 bg-red-600 hover:bg-red-700 text-black font-semibold hover:text-black py-2 px-4 border border-red-600 hover:border-transparent rounded"
          onClick={() => deleteTodo(index)}
        >
          X
        </button>
      </div>
    </div>
  ));
}

export default List;
