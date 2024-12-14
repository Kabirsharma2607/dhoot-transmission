import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="nav-menu">
        <ul>
          <li className="nav-item">Scan</li>
          <li className="nav-item">Open issues</li>
          <li className="nav-item bottom">Logout</li>
          <li className="nav-item version">Version 1.0</li>
        </ul>
      </nav>
    </aside>
  );
}
