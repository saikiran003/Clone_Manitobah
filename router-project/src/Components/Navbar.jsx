import React from "react";
import "../Styles/navbar.css";
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://cdn.shopify.com/s/files/1/0099/9802/files/logo_1_400x.png?v=1634100238"
          alt="logo"
        />
      </div>
      <div className="products">
        <div>
          <Link to="/products">Women</Link>
        </div>
        <div>Kids</div>
        <div>Mens</div>
        <div>Mitts&Gloves</div>
        <div>Storyboots</div>
        <div>Sale</div>
        <div>Help</div>
      </div>
      <div className="icons">
        <div>
          <a href="/account">
            <img src="https://thumbs.dreamstime.com/b/user-account-line-icon-outline-person-logo-illustration-linear-pictogram-isolated-white-90234649.jpg" alt="account"/>
          </a>
        </div>
        <div>
            <a href="search">
                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" alt="search"/>
            </a>
        </div>
        <div>
            <a href="cart">
                <img src="https://www.kindpng.com/picc/m/80-804194_cart-free-cart-icon-png-transparent-png.png" alt="cart"/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
