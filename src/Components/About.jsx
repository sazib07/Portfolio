import React from 'react'
import Contact from './Contact'

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-3 sm:px-6 md:px-10 py-10 sm:py-12"
      >
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mx-auto mb-5 sm:mb-6 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500">
            <img src="/portfolioimage.png" alt="profile" className="w-full h-full object-cover"/>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-200 leading-tight">
            👋 Hi, I'm <span className="text-indigo-500">Sazib Hossain</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            A passionate MERN Stack Developer crafting intuitive, fast, and scalable web solutions.
            I love turning ideas into real products using clean & modern code.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            <div className="bg-gray-300 shadow-md rounded-xl p-4 sm:p-5 md:p-6 hover:scale-[1.03] transition">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-indigo-600">🎨 Frontend</h3>
              <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
                React, Tailwind, Next.js, UI Design & Animations
              </p>
            </div>

            <div className="bg-gray-300 shadow-md rounded-xl p-4 sm:p-5 md:p-6 hover:scale-[1.03] transition">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-indigo-600">🛠 Backend</h3>
              <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
                Node.js, Express.js, MongoDB, JWT Auth
              </p>
            </div>

            <div className="bg-gray-300 shadow-md rounded-xl p-4 sm:p-5 md:p-6 hover:scale-[1.03] transition">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-indigo-600">🚀 Goal</h3>
              <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
                Build products that make an impact.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <a 
              href="#Contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              📩 Contact Me
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition-all text-center"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About