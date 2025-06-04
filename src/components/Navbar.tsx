import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isOnLoginPage = currentPath === "/login";
  const isOnRegisterPage = currentPath === "/register";
  const isOnHomePage = currentPath === "/";

  const linkStyle =
    "px-4 py-2 rounded-lg hover:bg-white/30 focus:bg-white/40 focus:outline-none transition";

  return (
    <div className="navbar bg-kuning shadow-md px-4 md:px-8">
      <div className="flex-1">
        <Link
          to="/"
          className="text-xl font-bold btn text-white bg-ungu-500 rounded-full px-4 py-2 transition"
        >
          UIN
        </Link>
      </div>

      <div className="flex-none">
        {/* Desktop menu */}
        <ul className="menu menu-horizontal px-1 hidden md:flex gap-2 text-black">
          {!isOnHomePage && (
            <li>
              <Link to="/" className={linkStyle}>
                Beranda
              </Link>
            </li>
          )}
          {!isOnRegisterPage && (
            <li>
              <Link to="/register" className={linkStyle}>
                Register
              </Link>
            </li>
          )}
          {!isOnLoginPage && (
            <li>
              <Link to="/login" className={linkStyle}>
                Login
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <label
            tabIndex={0}
            className="btn text-white bg-ungu-500 hover:bg-ungu-500 btn-ghost btn-circle"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-ungu-500 text-white rounded-box w-52"
          >
            {!isOnHomePage && (
              <li>
                <Link to="/" className={linkStyle}>
                  Beranda
                </Link>
              </li>
            )}
            {!isOnRegisterPage && (
              <li>
                <Link to="/register" className={linkStyle}>
                  Register
                </Link>
              </li>
            )}
            {!isOnLoginPage && (
              <li>
                <Link to="/login" className={linkStyle}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
