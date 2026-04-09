import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0F0F10] to-[#050507] text-gray-300 pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 mt-12 sm:mt-16 md:mt-20 border-t border-white/10">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-4 gap-4 sm:gap-6 md:gap-10">

        {/* BRAND / ABOUT */}
        <div>
          <h3 className="text-base sm:text-lg md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Sazib Hossain
          </h3>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-400 leading-tight sm:leading-relaxed">
            Building modern, responsive, and user-friendly web applications with clean code and creativity.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-sm sm:text-base md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-teal-300">Quick Links</h4>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-400">
            <li className="hover:text-teal-200 transition"><a href="/">Home</a></li>
            <li className="hover:text-teal-200 transition"><a href="#about">About</a></li>
            <li className="hover:text-teal-200 transition"><a href="#projects">Projects</a></li>
            <li className="hover:text-teal-200 transition"><a href="#Skills">Skills</a></li>
            <li className="hover:text-teal-200 transition"><a href="#Contact">Contact</a></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-sm sm:text-base md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-teal-300">Resources</h4>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-400">
            <li className="hover:text-teal-300 transition"><a href="#">Blogs</a></li>
            <li className="hover:text-teal-300 transition"><a href="#">GitHub Repos</a></li>
            <li className="hover:text-teal-300 transition"><a href="#">Roadmaps</a></li>
            <li className="hover:text-teal-300 transition"><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm sm:text-base md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-teal-300">Get in Touch</h4>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-gray-400">
            <li className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <FaEnvelope className="text-teal-300 text-sm sm:text-base md:text-xl" />
              <span className="break-all">sazibmd93@gmail.com</span>
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-6">
            <a href="https://www.facebook.com/share/1DofhnNLDW/" className="text-sm sm:text-lg md:text-2xl text-gray-400 hover:text-teal-300 transition">
              <FaFacebook />
            </a>
            <a href="https://github.com/sazib07" className="text-sm sm:text-lg md:text-2xl text-gray-400 hover:text-teal-300 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sazib-hossain-b86289310" className="text-sm sm:text-lg md:text-2xl text-gray-400 hover:text-teal-300 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 text-center text-[10px] sm:text-xs md:text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()},
          <span className="text-teal-300 font-medium"> Sazib</span>.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;