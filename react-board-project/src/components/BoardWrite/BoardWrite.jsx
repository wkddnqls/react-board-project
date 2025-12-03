import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardWritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = () => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      writer: user.email,
      createdAt: new Date().toLocaleString(),
    };

    localStorage.setItem("posts", JSON.stringify([newPost, ...posts]));
    navigate("/board");
  };

  return (
    <div>
      <h2>글쓰기</h2>
      <input placeholder="제목" value={title} onChange={e => setTitle(e.target.value)} /><br />
      <textarea placeholder="내용" value={content} onChange={e => setContent(e.target.value)} /><br />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
};

export default BoardWritePage;
