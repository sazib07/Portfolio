import React from "react";
import { LiaSearchDollarSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUserTie, FaBarsStaggered } from "react-icons/fa6";
import Container from "./container";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";




const Header = () => {
  const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact Me", href: "#Contact" },

];

  return (
    <Container>

    <header className="bg-[#11071F] text-white py-4">
      <nav className="container mx-auto flex items-center justify-between px-4">
<h1 class="text-4xl font-extrabold flex gap-1 animate-pulse">
  <span class="animate-bounce [animation-delay:.0s] bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">S</span>
  <span class="animate-bounce [animation-delay:.1s] bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">a</span>
  <span class="animate-bounce [animation-delay:.2s] bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">z</span>
  <span class="animate-bounce [animation-delay:.3s] bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 text-transparent bg-clip-text">i</span>
  <span class="animate-bounce [animation-delay:.4s] bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">b</span>

</h1>

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

<a
        href="/resume.png"
        download
        className="inline-flex items-center gap-2 px-12 py-3 
        bg-gradient-to-r from-blue-500 to-indigo-600 
        text-purple-200 font-mono rounded-lg 
        shadow-lg shadow-indigo-500/40
        hover:scale-105 hover:shadow-indigo-500/70
        transition-all duration-300"
      >
        <FaDownload/>
        Resume
      </a>

      {/* Tooltip */}
      <span
        className="absolute -top-12 left-1/2 -translate-x-1/2
        whitespace-nowrap rounded-md bg-black px-3 py-1 text-sm
        text-white opacity-0 group-hover:opacity-100
        transition duration-300"
      >
        Download Resume
      </span>

      </nav>
    </header>
    </Container>
  );
};

export default Header;
