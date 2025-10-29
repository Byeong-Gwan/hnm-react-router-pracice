import { useEffect, useState } from 'react'
import React from "react";
import './App.css'
import { Routes, Route } from 'react-router'
import ProductAll from './pages/ProductAll'
import Login from './pages/Login'
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/privateRoute';
/**
 * 1. 전체상품 페지, 로인, 상세페이지
 * 2. 전체 상품페이지에서는 전체 상품을 볼수 있다.
 * 
 * 3.로그인 버튼을 누르면 로그인 페이지가 나온다.
 * 3-1. 상품디테일을 눌렀으나, 로그인이 안되있을 경우 -> 로그인 페이지가 먼저 나온다.
 * 4. 로그인이 되어 있을 경우 상품 디테일 페이지를 볼 수 있다.
 * 
 * 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
 * 5- 1 로그아웃이 되면 상품 디테일페이지를 볼 수 없다, 다시 로그인 페이지가 보인다.
 * 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
 * 7. 상품 검색을 할 수 있다.
 */
function App() {
  const [authenticate, setAuthenticate] = useState(false); // ture 로그인이 됨
  useEffect(() => {
    
  }, [authenticate]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  )
}

export default App
