import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/Firebase.util";

import { ReactComponent as Logo } from "../assests/crown.svg";

import { useSelector } from "react-redux";

const Header = ({  }) => {

  const currentUser = useSelector(state => state.user.currentUser)
  console.log(currentUser);

  return (
    <div className="flex justify-between mb-6 w-full h-16 px-8">
      <Link className="h-full w-16 p-6" to="/">
        <Logo className="logo" />
      </Link>
      <div className="w-1/2 h-full flex items-center justify-end text-xl mt-4">
        <Link className="px-2 py-4" to="/shop">
          SHOP
        </Link>
        <Link className="px-2 py-4" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="px-2 py-4 cursor-pointer"
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="px-2 py-4" to="/sign-in">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
