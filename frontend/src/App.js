import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  return (
    <Router>
      <Navbar user={user} setUser={setUser} setToken={setToken} />
      <Routes>
       <Route path="/" element={<Home user={user} token={token} />} />
        <Route path="/edit/:id" element={<EditPost token={token} />} />

        <Route path="/login" element={<Login setUser={setUser} setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-post" element={<NewPost token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
