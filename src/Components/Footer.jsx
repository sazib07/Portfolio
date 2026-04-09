import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full from-[#0F0F10] to-[#050507] text-gray-300 pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8 mt-16 sm:mt-20 border-t border-white/10">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">

        {/* BRAND / ABOUT */}
        <div className="col-span-2 md:col-span-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Sazib Hossain
          </h3>
          <p className="mt-3 sm:mt-4 text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
            Building modern, responsive, and user-friendly web applications with clean code and creativity.
          </p>
        </div>

        {/* RIGHT SIDE 3 COLUMN FIX */}
        <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center md:text-left">

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-teal-300">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
              <li className="hover:text-teal-200 transition"><a href="/">Home</a></li>
              <li className="hover:text-teal-200 transition"><a href="#about">About</a></li>
              <li className="hover:text-teal-200 transition"><a href="#projects">Projects</a></li>
              <li className="hover:text-teal-200 transition"><a href="#Skills">Skills</a></li>
              <li className="hover:text-teal-200 transition"><a href="#Contact">Contact</a></li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-sm sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-teal-300">
              Resources
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm md:text-base">
              <li className="hover:text-teal-300 transition"><a href="#">Blogs</a></li>
              <li className="hover:text-teal-300 transition"><a href="#">GitHub Repos</a></li>
              <li className="hover:text-teal-300 transition"><a href="#">Roadmaps</a></li>
              <li className="hover:text-teal-300 transition"><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-teal-300">
              Get in Touch
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm md:text-base">
              <li className="flex items-center justify-center md:justify-start gap-2 sm:gap-3">
                <FaEnvelope className="text-teal-300 text-base sm:text-lg md:text-xl" />
                <span>sazibmd93@gmail.com</span>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mt-4 sm:mt-6">
              <a href="https://www.facebook.com/share/1DofhnNLDW/" className="text-lg sm:text-xl md:text-2xl text-gray-400 hover:text-teal-300 transition">
                <FaFacebook />
              </a>
              <a href="https://github.com/sazib07" className="text-lg sm:text-xl md:text-2xl text-gray-400 hover:text-teal-300 transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sazib-hossain-b86289310" className="text-lg sm:text-xl md:text-2xl text-gray-400 hover:text-teal-300 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mt-8 sm:mt-10 md:mt-12 pt-4 sm:pt-6 text-center text-gray-500 text-xs sm:text-sm md:text-base">
        <p>
          © {new Date().getFullYear()},
          <span className="text-teal-300 font-medium">Sazib</span>.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;