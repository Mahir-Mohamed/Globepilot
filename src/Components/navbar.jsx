import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css"; // optional, create later

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">GlobePilot</Link>
      </div>
      <nav className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/plan">Plan Trip</NavLink>
        <NavLink to="/trips">My Trips</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
