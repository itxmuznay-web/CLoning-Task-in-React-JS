import "./Header.css"
import amazonLogo from "../images/amazon-logo.png";
import { FaAmazon } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaWeightHanging } from "react-icons/fa";

function Header () {
  return (
    <div>
      <header>
  <div className="navbar">
    <div className="nav-logo border">
      <img src={amazonLogo} alt="Amazon logo" />
      <div className="logo"></div>
    </div>

    <div className="nav-address border">
      <p className="add-first">Deliver to</p>
      <div className="add-icon">
      <FaMapMarkerAlt />
        <p className="add-sec">India</p>
      </div>
    </div>

    <div className="nav-search">
      <select className="search-select">
        <option>All</option>
      </select>

      <input
        type="text"
        placeholder="Search Amazon"
        className="search-input"
      />

      <div className="search-icon">
       <FaSearch />
      </div>
    </div>

    <div className="nav-signin border">
      <p>
        <span>Hello, signin</span>
      </p>
      <p className="nav_sec">Account & Lists</p>
    </div>

    <div className="nav-return border">
      <p>
        <span>Returns</span>
      </p>
      <p className="nav_sec">& Orders</p>
    </div>

    <div className="nav-cart border">
      <FaWeightHanging />
      cart
    </div>
  </div>

  <div className="panel">
    <div className="panel-all">
      <i className="fa-solid fa-bars"></i>
      All
    </div>

    <div className="panel-opt">
      <p>Today's Deal</p>
      <p>Customer Service</p>
      <p>Registry</p>
      <p>Gift Card</p>
      <p>Sell</p>
    </div>

    <div className="panel-deal">Shops Deal in Electonics</div>
  </div>
</header>

    </div>
  )
}
  export default Header;