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
        <h1 className="bg-blue-500 px-2 rounded-sm ">Sazib</h1>

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

        {/* Icons */}
        <div className="flex items-center gap-5 lg:gap-8">
          <LiaSearchDollarSolid className="text-[28px] lg:text-[32px]" />

          <div className="relative after:content-[''] after:absolute after:top-[-8px] after:right-[-6px] after:w-[12px] after:h-[12px] after:bg-red-500 after:rounded-full">
            <RiDeleteBinLine className="text-[28px] lg:text-[32px]" />
          </div>

          <FaUserTie className="text-[28px] lg:text-[32px]" />

          {/* Mobile Menu */}
          <FaBarsStaggered className="lg:hidden text-[26px]" />
        </div>
      </nav>
    </header>
    </Container>
  );
};

export default Header;
