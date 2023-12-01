import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="nav nav-fill flex-column mt-2">
      <Link to="/project/home"
        className={`nav-item nav-link ${pathname.includes("home") ? "active" : ""}`}>Home</Link>
      <Link className={`nav-item nav-link ${pathname.includes("search") ? "active" : ""}`} to="/project/search">
        Search</Link>
      <Link className={`nav-item nav-link ${pathname.includes("signin") ? "active" : ""}`} to="/project/signin">
        Sign in</Link>
      <Link to="/project/signup"
        className={`nav-item nav-link ${pathname.includes("signup") ? "active" : ""}`}>Sign up</Link>
      <Link to="/project/account"
        className={`nav-item nav-link ${pathname.includes("account") ? "active" : ""}`}>Account</Link>
    </nav>
  );
}
export default Nav;