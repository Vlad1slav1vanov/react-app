import React from "react";
import About from "../../../pages/About";
import Posts from "../../../pages/Posts";
import ErrorRedirect from "../../../pages/ErrorRedirect";
import { Route, Routes, Navigate } from "react-router-dom";
import Fullpost from "../../../pages/Fullpost";

const AppRouter = () => {
    return (
      <div>
        <Routes>
        <Route path="/About" element={<About/>}></Route>
        <Route exact path="/Posts" element={<Posts/>}></Route>
        <Route exact path="/Posts/:id" element={<Fullpost/>}></Route>
        <Route path="/ErrorRedirect" element={<ErrorRedirect/>}></Route>
        <Route path="*" element={<Navigate replace to="/ErrorRedirect"/>}/>
      </Routes>
      </div>
    )
}

export default AppRouter;