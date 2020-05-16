import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Nav = () => {
    return (
      <div>
        <nav>
            <li>
                <Link exact to="/">Home</Link>
            </li>
            <li>
                <Link exact to="/pizza">Place Order</Link>
            </li>
        </nav>
      </div>
    );
  };
  export default Nav;