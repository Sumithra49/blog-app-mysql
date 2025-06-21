import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home({ user, token }) {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => {
        console.error("Failed to fetch posts", err);
        alert("Error loading posts");
      });
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:8080/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete post");
    }
  };

  const handleEdit = (postId) => {
    navigate(`/edit/${postId}`);
  };

  return (
    <div className="home-container">
      <h3 style={{ textAlign: "center" }}>📚 All Blog Posts</h3>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h4>{post.title}</h4>
          <p className="author">created by {post.User?.username || "Unknown"}</p>
          <p>{post.content}</p>

          {user && user.id === post.userId && (
            <div className="post-actions">
              <button onClick={() => handleEdit(post.id)}> Edit</button>
              <button onClick={() => handleDelete(post.id)}> Delete</button>
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Home;
