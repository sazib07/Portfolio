import React from "react";
import { LiaSearchDollarSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUserTie, FaBarsStaggered } from "react-icons/fa6";
import Container from "./container";


const Header = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#"  },
    { name: "Products", href: "#" },
    { name: "FAQ’s", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <Container>

    <header className="bg-[#11071F] text-white py-4">
      <nav className="container mx-auto flex items-center justify-between px-4 border-b-4">
        {/* Logo */}
        {/* <img
          className="w-[50px] lg:w-[180px] h-auto"
          src="logo.png (2).png"
          alt="logo"
        /> */}
       <h1 
  class="text-4xl font-extrabold text-cyan-300 drop-shadow-[0_0_15px_#06b6d4] animate-pulse">
  Sazib
</h1>


        {/* Navigation Links */}
        <ul className="hidden lg:flex gap-10">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="hover:text-purple-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

    
      </nav>
    </header>
    </Container>
  );
};

export default Header;
