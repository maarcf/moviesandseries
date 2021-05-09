import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink activeClassName="selected" exact to="/">
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName="selected" exact to="/movies">
          <li>Movies</li>
        </NavLink>
        <NavLink activeClassName="selected" exact to="/series">
          <li>Series</li>
        </NavLink>
        <li>Search</li>
      </ul>
    </nav>
  );
};

export default NavBar;
