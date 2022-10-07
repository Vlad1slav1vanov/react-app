import React, { useContext } from "react";
import About from "../../../pages/About";
import Posts from "../../../pages/Posts";
import ErrorRedirect from "../../../pages/ErrorRedirect";
import { Route, Routes, Navigate } from "react-router-dom";
import Fullpost from "../../../pages/Fullpost";
import Login from "../../../pages/Login";
import { AuthContext } from "../../../context";
import Loader from "../Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading) {
      return <Loader/>
    }
    return (
      isAuth
      ?
      <Routes>
        <Route path="/About" element={<About/>}></Route>
        <Route exact path="/posts" element={<Posts/>}></Route>
        <Route exact path="/posts/:id" element={<Fullpost/>}></Route>
        <Route path="/ErrorRedirect" element={<ErrorRedirect/>}></Route>
        <Route path="/*" element={<Navigate replace to="/ErrorRedirect"/>}/>
      </Routes>
      :
      <Routes>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route path="*" element={<Navigate replace to="/login"/>}/>
      </Routes>
    )
}

export default AppRouter;