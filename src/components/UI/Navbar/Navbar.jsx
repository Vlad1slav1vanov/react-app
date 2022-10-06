import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div className="navBar">
      <div className="navBar__links">
        <Link className="navBar__item" to="/about">
          О сайте
        </Link>
        <Link className="navBar__item" to="/posts">
          Посты
        </Link>
      </div>
    </div>
    )
}

export default Navbar;