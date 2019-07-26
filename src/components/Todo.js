import React, { useState } from "react";
import "../index.css";
import List from "./List.js";
import AddTodo from "./AddTodo.js";
import EditTodo from "./EditTodo";

function Members() {
  const usersTodo = [
    {
      text: "My house",
      isComplete: false,
      id: 1
    },
    {
      text: "Eat apples",
      isComplete: true,
      id: 2
    }
  ];

  const [todos, setTodo] = useState(usersTodo);
  const [editing, setEditing] = useState(false);
  const initialFormState = { text: "", isComplete: null, id: null };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // Getting the prop from AddTodo component
  // and sets it's value to a new value within athe object
  const addToList = todo => {
    //const newTodo = [...todo, { text }];
    todo.id = todos.length + 1;
    console.log(todos.id);
    setTodo([...todos, todo]);
    //console.log(newTodo);
  };

  const completeTodo = index => {
    const newTodo = [...todos];
    console.log(newTodo);
    if (newTodo[index].isComplete === false) {
      newTodo[index].isComplete = true;
      setTodo(newTodo);
    } else {
      newTodo[index].isComplete = false;
      setTodo(newTodo);
    }
  };

  const deleteTodo = index => {
    console.log(index);
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  const updateTodo = todo => {
    setEditing(true);
    setCurrentUser({
      text: todo.text,
      isComplete: todo.isComplete,
      id: todo.id
    });
    console.log(todo);
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setTodo(todos.map(user => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container mx-auto">
      <h1 className="font-sans text-6xl pt-5 pb-10 mtk2 text-center">
        Todo with React
      </h1>
      <div className="w-full mx-auto px-3 md:px-5">
        {/* Passing the addToList function to the AddTodo component to get the value from the component */}
        {editing ? (
          <div>
            <h1 className="font-sans text-2xl pb-3 mtk3">Update your Todo</h1>
            <EditTodo
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <AddTodo addToList={addToList} updateTodo={updateTodo} />
        )}
        <div className="todo-background mx-auto p-6 m-10">
          <List
            todo={todos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </div>
      </div>
      {/* Listing out the values in the todos in the List component */}
    </div>
  );
}

export default Members;
