import { useState } from "react";
//import LoginModal from "./HomeLogin";
import "./Navbar.css";
import React from "react";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="wrapper">
      <nav className="navigation">
        <a href="/" className="brand-name">
          SubZero Delights
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/home">ICE CREAM</a>
            </li>
            <li>
              <a href="/about">SORBET</a>
            </li>
            <li>
              <a href="/about">ICE CREAM BARS</a>
            </li>
            <li>
              <a href="/contact">GLUTEN FREE</a>
            </li>
            {/*-- <LoginModal /> --*/}
          </ul>
        </div>
      </nav>
    </div>
  );
}