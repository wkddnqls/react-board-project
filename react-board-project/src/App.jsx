import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginForm from "./page/LoginForm/LoginForm"; 
import RegisterForm from "./page/RegisterForm/RegisterForm";
 import MyPage from "./page/MyPage/Mypage"; 
 import BoardList from "./page/BoardList/BoardList"; 
 import BoardWrite from "./page/BoardWrite/BoardWrite"; 
 import BoardDetail from "./page/BoardDetail/BoardDetail"
 ; import BoardEdit from "./page/BoardEdit/BoardEdit";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
    else setUser(null);
  }, []);

if (user === undefined) return null;
 
return (
    <BrowserRouter>
      <Routes>
        {/* Layout 안에 Header/Footer 적용 */}
          <Route path="/" element={<Layout />}>  
          <Route index element={ user ? <Navigate to="/mypage" replace /> : <LoginForm onLogin={setUser} />}/>
          {/* 마이페이지 */}
          <Route path="mypage" element={ user ? <MyPage user={user} onLogout={setUser} />  : <Navigate to="/" replace /> }/>
          {/* 회원가입 */}
          <Route path="register" element={user ? <Navigate to="/mypage" replace /> : <RegisterForm onRegister={setUser}/>} />
          {/* 게시판 기능 페이지 들  */}
          <Route path="board" element={user ? <BoardList /> : <Navigate to="/" replace />} />
          <Route path="board/write" element={user ? <BoardWrite /> : <Navigate to="/" replace />} />
          <Route path="board/:id" element={user ? <BoardDetail/> : <Navigate to="/" replace />} />
          <Route path="board/:id/edit" element={user ? <BoardEdit /> : <Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
