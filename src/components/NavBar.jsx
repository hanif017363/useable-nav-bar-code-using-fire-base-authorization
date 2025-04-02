import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContxt";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function NavBar() {
  const { userLoggedIn } = useAuth();

  return (
    <div>
      <div className="nav">
        <ul>
          <NavLink to={"/"}>Home</NavLink>

          <li>
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={"/app"}>App</NavLink>
          </li>
          {!userLoggedIn && (
            <>
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
              <li>
                <NavLink to={"/signup"}>Sign Up</NavLink>
              </li>
            </>
          )}

          {userLoggedIn && (
            <>
              <li>
                <NavLink to={"/"} onClick={() => signOut(auth)}>
                  Logout
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
