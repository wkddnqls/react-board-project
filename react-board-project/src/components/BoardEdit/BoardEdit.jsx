import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const found = posts.find(p => p.id === id);
    if (found) {
      setTitle(found.title);
      setContent(found.content);
    }
  }, [id]);

  const handleEdit = () => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const newPosts = posts.map(p =>
      p.id === id ? { ...p, title, content } : p
    );
    localStorage.setItem("posts", JSON.stringify(newPosts));
    navigate(`/board/${id}`);
  };

  return (
    <div>
      <h2>글 수정</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} /><br />
      <textarea value={content} onChange={e => setContent(e.target.value)} /><br />
      <button onClick={handleEdit}>수정 완료</button>
    </div>
  );
};

export default BoardEditPage;
