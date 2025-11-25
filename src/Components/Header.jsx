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
<h1 class="text-4xl font-extrabold flex gap-1">
  <span class="animate-bounce [animation-delay:.0s] bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">S</span>
  <span class="animate-bounce [animation-delay:.1s] bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">a</span>
  <span class="animate-bounce [animation-delay:.2s] bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">z</span>
  <span class="animate-bounce [animation-delay:.3s] bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 text-transparent bg-clip-text">i</span>
  <span class="animate-bounce [animation-delay:.4s] bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">b</span>

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
