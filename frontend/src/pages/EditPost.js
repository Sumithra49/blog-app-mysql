import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditPost({ token }) {
  const { id } = useParams();
  const [form, setForm] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://blog-app-mysql-4hrx.onrender.com/api/posts/${id}`)
      .then((res) => {
        setForm({ title: res.data.title, content: res.data.content });
      })
      .catch(() => alert("Failed to load post"));
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://blog-app-mysql-4hrx.onrender.com/api/posts/${id}`,
        { ...form },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/");
    } catch (err) {
      alert("Failed to update post");
    }
  };

  return (
    <div className="new-post-container">
      <h3>Edit Post</h3>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        rows={5}
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default EditPost;
