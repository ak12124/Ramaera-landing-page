import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  // const [searchClicked, setSearchClicked]= useState(false);
  return (
    <header>
      <img src="/images/logo.png" alt="Ramaera logo" />
      <nav>
        <div className="left-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/industries">Our Indusrties </Link>{" "}
            </li>
            <li>
              <Link to="/companies">Our Companies</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="right-menu">
          <ul>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <BsSearch
                className="searc-icon"
                style={{ cursor: "pointer", color: "#ffffff" }}
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
