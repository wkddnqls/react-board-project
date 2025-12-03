import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyPage from "./pages/MyPage";
import BoardListPage from "./pages/BoardListPage";
import BoardWritePage from "./pages/BoardWritePage";
import BoardDetailPage from "./pages/BoardDetailPage";
import BoardEditPage from "./pages/BoardEditPage";

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
          <Route index element={ user ? <Navigate to="/mypage" replace /> : <LoginPage onLogin={setUser} />}/>
          {/* 마이페이지 */}
          <Route path="mypage" element={ user ? <MyPage user={user} onLogout={setUser} />  : <Navigate to="/" replace /> }/>
          {/* 회원가입 */}
          <Route path="register" element={user ? <Navigate to="/mypage" replace /> : <RegisterPage onRegister={setUser}/>} />
          <Route path="board" element={user ? <BoardListPage /> : <Navigate to="/" replace />} />
          <Route path="board/write" element={user ? <BoardWritePage /> : <Navigate to="/" replace />} />
          <Route path="board/:id" element={user ? <BoardDetailPage /> : <Navigate to="/" replace />} />
          <Route path="board/:id/edit" element={user ? <BoardEditPage /> : <Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
