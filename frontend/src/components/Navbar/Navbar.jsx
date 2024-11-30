import AuthButton from "../AuthButton/AuthButton";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUserInfo } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);
  // console.log(userInfo);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="headerContainer border-b-2 shadow-sm sticky top-0 z-50 bg-white">
      <div className="headerWrapper px-4 py-3 md:container md:mx-auto flex items-center gap-20 lg:justify-between">
        {/* left */}
        <div className="left flex items-center justify-center gap-8 font-medium">
          <span className="text-sky-500 text-lg">
            <NavLink to={"/"}>INTERNSPOT</NavLink>
          </span>
          <div className="hidden md:flex items-center justify-center gap-8 font-medium">
            <NavLink to={"/internships"}>Internships</NavLink>
            <NavLink>Jobs</NavLink>
            <NavLink to={"/subscription"}>Subscription</NavLink>
          </div>
        </div>
        {/* right */}
        <div className="right flex items-center justify-end">
          {/* {userInfo && (
              <NavLink to={"/user/profile"}>
                <div className="avatarContainer w-12 h-12 border rounded-full overflow-hidden object-contain outline outline-3 outline-offset-2 outline-slate-300 mr-5 text-end">
                  <img src={userInfo?.avatar} alt="avatar" />
                </div>
              </NavLink>
            )} */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="searchContainer flex gap-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none"
              />
            </div>

            {userInfo ? (
              <>
                {userInfo && (
                  <NavLink to={"/user/profile"}>
                    <div className="avatarContainer w-12 h-12 border rounded-full overflow-hidden object-contain outline outline-3 outline-offset-2 outline-slate-300">
                      <img src={userInfo?.avatar} alt="avatar" />
                    </div>
                    {/* <div className="lg:hidden">Profile</div> */}
                  </NavLink>
                )}
                <button
                  onClick={handleLogout}
                  className="text-sky-400 bg-white font-medium text-md p-2 px-3 border border-sky-400 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to={"/auth/login"}>
                  <button className="text-sky-400 bg-white font-medium text-md p-2 px-3 border border-sky-400 rounded-md">
                    Login
                  </button>
                </NavLink>

                <NavLink to={"/auth/register"}>
                  <AuthButton data={"Register"} />
                </NavLink>

                <AuthButton data={"Employer Sign-up"} />
              </>
            )}
          </div>

          <span
            className="absolute right-0 mr-5 lg:hidden hover:cursor-pointer p-1 rounded-xl"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </span>
        </div>
      </div>

      {menuOpen && (
        <OutsideClickHandler onOutsideClick={closeMenu}>
          <div className="mobile flex flex-col items-start text-center bg-white shadow-md absolute right-5 top-4 rounded-xl w-40 border overflow-hidden">
            <NavLink
              to={"/internships"}
              className="border-b px-4 py-3 w-full hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Internships
            </NavLink>
            <NavLink
              to={"/subscription"}
              className="border-b px-4 py-3 w-full hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Subscription
            </NavLink>
            {userInfo ? (
              <>
                <NavLink
                  to={"/user/profile"}
                  className="border-b px-4 py-3 w-full hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  Profile
                </NavLink>
                <button
                  className="border-b px-4 py-3 w-full text-sky-400 hover:bg-gray-50"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to={"/auth/login"}
                  className="border-b px-4 py-3 w-full text-sky-400 hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </OutsideClickHandler>
      )}
    </nav>
  );
};

export default Navbar;
