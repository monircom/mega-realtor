import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import avater from "../assets/avatar.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.error("User Logged out", {
          duration: 2000,
          position: "top-center",
        });
        setTimeout(function () {
          navigate("/");
        }, 2500);
        console.log("user Logged out successfully");
      })
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/listings"> Listings</NavLink>
      </li>
      {/* <li><NavLink to="/login"> Login</NavLink></li>*/}
      {!user && (
        <li>
          <NavLink to="/register"> Register</NavLink>
        </li>
      )}
      {user && (
        <>
          <li>
            <NavLink to="/update"> Update Profile</NavLink>
          </li>
          {/* <li>
            <NavLink to="/profile"> Profile</NavLink>
          </li> */}
        </>
      )}

      <li>
        <NavLink to="/about"> About</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 m-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <button className="btn btn-ghost text-xl font-bold">
            MEGA REALTOR
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <>
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end ">
              <Link to="/profile">
                <div className="tooltip tooltip-bottom z-[10]" data-tip={user?.displayName || "User Name Not Found"}>                  
                  <div                  
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="User" src={user?.photoURL || avater} />
                  </div>
                </div>
                </div>
                {/* <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="User" src={user?.photoURL || avater} />
                  </div>
                </div> */}
              </Link>
              {/* menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 */}
              {/* <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-300 rounded-box w-52 "
              >
                <li>
                  <span>{user?.displayName || "User Name Not Found"}</span>
                </li>
                <li>{<span>{user?.email || "Email  Not Found"}</span>}</li>
              </ul> */}
            </div>
            <a onClick={handleLogOut} className="btn btn-sm">
              Log Out
            </a>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm">Login</button>
          </Link>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Navbar;
