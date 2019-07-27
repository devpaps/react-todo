import React, { useState } from "react";

function AddTodo(props) {
  const initialFromState = { text: "", isComplete: false, id: null };
  const [todo, setTodo] = useState(initialFromState);

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo.text) return;
    props.addToList(todo);
    setTodo(initialFromState);
    console.log(todo);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <div className="container mx-auto text-center">
      <form onSubmit={handleSubmit} className="rounded flex">
        <input
          className="shadow appearance-none border rounded w-full py-2 mr-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="text"
          value={todo.text}
          onChange={handleChange}
          autoComplete="off"
          autoFocus={true}
          placeholder="Eg. Buy apples"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
