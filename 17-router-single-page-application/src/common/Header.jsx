import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Header Part</h1>
      <nav>
        <ul>
          
          <li><Link to={'/'}>Home</Link></li>
          <li> <Link to={'/about'}> About</Link> </li>
          <li> <Link to={'/contact'}> Contact</Link> </li>
        </ul>
      </nav>
    </div>
  );
}
