import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div className="flex justify-between pl-10 pr-10 items-center">
    <Link to="/">
      <h1 className="text-4xl">CyberPunk Todos</h1>
    </Link>
    <ul className="flex">
      <li className="mr-3">
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
