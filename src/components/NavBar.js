import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="selected" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/movie">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" exact to="/tv">
            Series
          </NavLink>
        </li>
        <li>Search</li>
      </ul>
    </nav>
  );
};

export default NavBar;
