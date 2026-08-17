import React, { useState, useEffect } from "react";

export default function feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1 className="text-center">Posts are:</h1>
      {posts.map((post, i) => (
        <div
          key={post.id ?? i}
          style={{
            width: "280px",
            background: "#fff",
            borderRadius: "12px",
            border: "1px solid #e5e5e5",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "12px 12px 16px",
            margin: "16px auto",
          }}
        >
          <img
            src={post.image}
            alt={post.caption}
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              borderRadius: "8px",
              display: "block",
            }}
          />
          <p
            style={{
              marginTop: "10px",
              marginBottom: 0,
              fontSize: "14px",
              color: "#333",
              textAlign: "center",
            }}
          >
            {post.caption}
          </p>
        </div>
      ))}
    </div>
  );
}
