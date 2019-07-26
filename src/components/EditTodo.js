import React, { useState, useEffect } from "react";

function EditTodo(props) {
  const [todo, setTodo] = useState(props.currentUser);

  useEffect(() => {
    setTodo(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.updateUser(todo.id, todo);
  };

  return (
    <div className="container mx-auto text-center">
      <form onSubmit={handleSubmit} className="rounded flex">
        <input
          className="shadow appearance-none border rounded w-full py-2 mr-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="text"
          value={todo.text}
          autoComplete="off"
          autoFocus={true}
          onChange={handleInputChange}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline">
          Update Todo
        </button>
        <button
          onClick={() => props.setEditing(false)}
          className="bg-transparent hover:bg-yellow-500 text-black-700 ml-4 font-semibold hover:text-black py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditTodo;
