import React from 'react';
import Link from 'next/link'; 
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <h1 className="logo">JavaScript</h1>
        <ul className="navLinks">
          <li><Link href="#" className="navLink">Home</Link></li>
          <li><Link href="#blog" className="navLink">Blog</Link></li>
          <li><Link href="#contact" className="navLink">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;