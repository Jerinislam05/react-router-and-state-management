import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <span>My Website</span>
        <Link to="/">Home</Link>
        <NavLink
          to="/users"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Posts
        </NavLink>
        <Link to="/albums">Albums</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact us</Link>
      </nav>
    </div>
  );
};

export default Header;
