import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/newpost.css";

function NewPost({ token }) {
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handlePost = async () => {
    try {
      await axios.post("https://blog-app-mysql-4hrx.onrender.com/api/posts", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/");
    } catch (err) {
      alert("Post creation failed");
    }
  };

  return (
    <div className="new-post-container">
      <h3>Create New Blog Post</h3>
      <input
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        rows={5}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      ></textarea>
      <button onClick={handlePost}>Post</button>
    </div>
  );
}

export default NewPost;
