import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const BoardDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [post, setPost] = useState(null);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const found = posts.find(p => p.id === id);
    setPost(found);
  }, [id]);

  const handleDelete = () => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const newPosts = posts.filter(p => p.id !== id);
    localStorage.setItem("posts", JSON.stringify(newPosts));
    navigate("/board");
  };

  if (!post) return <p>게시글을 찾을 수 없습니다.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>작성자: {post.writer}</p>
      <p>{post.content}</p>
      <p>작성시간: {post.createdAt}</p>

      {/* 작성자일 때만 수정/삭제 가능 */}
      {user.email === post.writer && (
        <>
          <Link to={`/board/${id}/edit`}>수정</Link>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}

      <button onClick={() => navigate(-1)}>뒤로</button>
    </div>
  );
};

export default BoardDetailPage;
