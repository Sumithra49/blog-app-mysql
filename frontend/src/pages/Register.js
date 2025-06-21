import React, { useState } from "react";
import axios from "axios";
import "../styles/register.css";

function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleRegister = async () => {
    try {
      await axios.post("https://blog-app-mysql-4hrx.onrender.com/api/auth/register", form);
      alert("Registered! Now you can log in.");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
      <h3>Register</h3>
      <input
        placeholder="Username"
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
