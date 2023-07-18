import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "./publicRouter";
import PrivateRouter from "./privateRouter";
import Login from "../pages/login/login";
import Home from "../pages/home/home";

const Router = () => {
const [isLogin, setIsLogin] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route element={<PublicRouter isAutenticate={isLogin}/>}> 
            <Route path="login" element={<Login signIn={setIsLogin}/>} />
            </Route>
            <Route element={<PrivateRouter isAutenticate={isLogin}/>}>
            <Route index  element={<Home signIn={setIsLogin}/>} />
                 </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
