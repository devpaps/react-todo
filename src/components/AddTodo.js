import React, { useState } from "react";

function AddTodo(props) {
  const initialFromState = {
    text: "",
    isComplete: false,
    id: null
  };
  const [todo, setTodo] = useState(initialFromState);

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo.text) return;
    props.addToList(todo);
    setTodo(initialFromState);
    console.log(todo);
  };

  const handleChange = event => {
    setTodo({
      ...todo,
      text: event.target.value
    });
  };

  /* To handle multiple inputs: add a name="text" attribute to the input, and then 
      const { name, value } = event.target; - destructuring the object
      setTodo({ ...todo, [name]: value });
      
      Single input and no need for the name attribute on the input element
      setTodo({ ...todo, text: event.target.value });
   */

  return (
    <div className="container mx-auto text-center">
      <form onSubmit={handleSubmit} className="rounded flex">
        <input
          className="shadow appearance-none border rounded w-full py-2 mr-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
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
