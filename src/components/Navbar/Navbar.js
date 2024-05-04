import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import littlelemon_logo from "../../images/littlelemon_logo.png";
import Switch from "../SwitchMode/SwitchMode"; // Assuming Switch is in the same folder or a relative path
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <img src={littlelemon_logo} alt="Little Lemon Logo" />
      <ul>
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li><a>About</a></li>
        <li><a>Menu</a></li>
        <li className="nav-item" >
          <Link className="nav-link" to="/booking">Reservations</Link>
        </li>
        <li><a>Order Online</a></li>
        <li><a>Login</a></li>
      </ul>
      <Switch />
    </nav>
  );
};

export default Navbar;

