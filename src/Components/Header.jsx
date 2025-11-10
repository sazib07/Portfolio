import React from 'react'


// import { LiaSearchDollarSolid } from "react-icons/lia";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { FaUserTie } from "react-icons/fa6";
// import { FaBarsStaggered } from "react-icons/fa6";


const Header = () => {
  
    let navItems = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "About US",
            href: "#"
        },
        {
            name: "Products",
            href: "#"
        },
        {
            name: "FAQ’S",
            href: "#"
        },
        {
            name: "Contact Us",
            href: "#"
        },
    ]
    
    return (
        <header className="bg-[#11071F] text-white">
  <nav>
    <Container>
      <Flex className="items-center justify-between mt-[20px]">
        <img className="w-[200px] lg:w-auto" src="images/Logo.png" alt="logo" />
        <ul className="hidden lg:flex lg:gap-10">
          {navItems.map((item) => (
            <ListItem key={item.name} className="nav_item" item={item} />
          ))}
        </ul>

        <div className="flex gap-[10px] lg:gap-[33px]">
          <LiaSearchDollarSolid size={30} className="text-white" />
          <div className="relative text-white after:content-[''] after:absolute after:top-[-13px] after:right-[-5px] after:w-[17px] after:h-[17px] after:rounded-full after:bg-red-500">
            <RiDeleteBinLine size={30} />
          </div>
          <FaUserTie size={30} className="text-white" />
        </div>

        <FaBarsStaggered className="lg:hidden text-white" />
      </Flex>
    </Container>
  </nav>
</header>

    )
}

export default Header