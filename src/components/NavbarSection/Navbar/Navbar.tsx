import "./Navbar.sass";
import searchIcon from "../../../assets/search.svg";
export default function Navbar() {
  return (
    <div className="navbar-container max-w-scre">
      <nav className="navbar">
        <div className="searchbar">
          <img src={searchIcon} alt="" />
          <input type="text" />
        </div>
        <div className="navbar_links">
          <a href="#">Categories</a>
          <a href="#">Website Builders</a>
          <a href="#">Today's deals</a>
        </div>
      </nav>
    </div>
  );
}
