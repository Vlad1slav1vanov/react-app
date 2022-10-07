import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../Button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
      setIsAuth(false);
      localStorage.removeItem('auth')
    }
    return (
    <div className="navBar">
      <div className="navBar__links">
        <Link className="navBar__item" to="/about">
          О сайте
        </Link>
        <Link className="navBar__item" to="/posts">
          Посты
        </Link>
        <MyButton onClick={logout}>Выйти</MyButton>
      </div>
    </div>
    )
}

export default Navbar;