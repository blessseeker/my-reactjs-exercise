import React from "react";

import "./NavLinks.css";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Semua Pengguna
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">Tempat Saya</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Tempat Baru</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Otentikasi</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
