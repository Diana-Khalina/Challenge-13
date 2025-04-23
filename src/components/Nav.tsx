import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Search Candidates</Link>
      <Link className="nav-link" to="/saved">Saved Candidates</Link> 
    </nav>
  );
};

export default Nav;
