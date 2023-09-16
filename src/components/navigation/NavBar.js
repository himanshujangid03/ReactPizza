import { useContext, useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Context/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const shoppingCart = (
    <span>
      <FontAwesomeIcon
        className="font-awesome-cart"
        icon={faCartShopping}
        color="black"
      />
    </span>
  );

  const navLinkClass = ({ isActive }) => {
    return isActive ? "active" : "";
  };
  const ctx = useContext(AuthContext);
  return (
    <>
      <></>
      <div className="navbar">
        <h3 className="logo">
          <Link> ReactPizza</Link>
        </h3>

        <div className="nav-right">
          <div className="cart-icon-badge">
            <NavLink
              className={({ isActive }) => (isActive ? "active-cart" : "")}
              to={"/cart"}
            >
              {shoppingCart}
              <span
                className={`badge ${
                  ctx.cartItem.length === 0 ? "hidden" : ""
                } `}
              >
                {ctx.cartItem.length}
              </span>
            </NavLink>
          </div>
          <ul>
            <li className="new-pizza-lst">
              <NavLink className={navLinkClass} to={"/new-pizza"}>
                New Pizza
              </NavLink>
            </li>
            <li className="login-btn">
              <NavLink to={"/login"} className={navLinkClass}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
