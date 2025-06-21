import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar({ user, setUser, setToken }) {
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>BlogApp</h2>
      <div>
        <Link to="/">Home</Link>
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/new-post">New Post</Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
