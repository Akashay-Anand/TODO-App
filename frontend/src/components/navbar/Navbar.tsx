import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-items">
        <h3 className="logo"><Link className="nav-link" to="/">ToDo</Link></h3>
        <ul className="nav-ul">
          <li className="nav-li"><Link className="nav-link" to="/Signup">Signup</Link></li>
          <li className="nav-li"><Link className="nav-link" to="/Login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
