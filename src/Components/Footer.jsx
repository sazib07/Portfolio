import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full from-[#0F0F10] to-[#050507] text-gray-300 pt-16 pb-8 mt-20 border-t border-white/10">
      
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND / ABOUT */}
        <div>
          <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Sazib Hossain
          </h3>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Building modern, responsive, and user-friendly web applications with clean code and creativity.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-teal-300">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-teal-300 transition"><a href="#home">Home</a></li>
            <li className="hover:text-teal-300 transition"><a href="#about">About</a></li>
            <li className="hover:text-teal-300 transition"><a href="#projects">Projects</a></li>
            <li className="hover:text-teal-300 transition"><a href="#skills">Skills</a></li>
            <li className="hover:text-teal-300 transition"><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-teal-300">Resources</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-teal-300 transition"><a href="#">Blogs</a></li>
            <li className="hover:text-teal-300 transition"><a href="#">GitHub Repos</a></li>
            <li className="hover:text-teal-300 transition"><a href="#">Roadmaps</a></li>
            <li className="hover:text-teal-300 transition"><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-teal-300">Get in Touch</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-teal-300 text-xl" />
              <span>sazibmd93@gmail.com</span>
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/share/1DofhnNLDW/" className="text-2xl text-gray-400 hover:text-teal-300 transition">
              <FaFacebook />
            </a>
            <a href="https://github.com/sazib07" className="text-2xl text-gray-400 hover:text-teal-300 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sazib-hossain-b86289310" className="text-2xl text-gray-400 hover:text-teal-300 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500">
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
