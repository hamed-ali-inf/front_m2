

import searchIcon from "../../assets/search.png";
import './Nav.css'
export function Nav() {
  return (
    <nav>
        <div className="logo">
            <img src={searchIcon} alt="Search" />
            <span>Search</span>
        </div>
        <div className="nav-links">
            <a href="/login">Login</a>
            <a href="/history">History</a>
          
        </div>
      
    </nav>
  );
}
