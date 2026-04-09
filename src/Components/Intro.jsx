import React, { useEffect, useState } from 'react'
import Container from './container'
import { FaDownload } from "react-icons/fa6";


const Intro = () => {
    const words = ["Front End", "Software", "MERN Stack"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    },3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>

    {/* ✅ FIXED: always side-by-side */}
    <div className="flex flex-row items-center gap-3 sm:gap-6 md:gap-10 lg:gap-16">

{/* ✅ LEFT SIDE */}
<div className="w-[60%] sm:w-[60%] md:w-[55%] lg:w-[50%]">
   <h1 className="ml-[10px] text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] mt-3 sm:mt-5 md:mt-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
     Hey,This is Sazib Hossain.
   </h1>

     <h2 className="ml-[10px] text-[28px] sm:text-[36px] md:text-[50px] lg:text-[64px] xl:text-[72px] text-teal-100 font-bold mt-2 sm:mt-3 md:mt-4 leading-tight">
        I'm{" "}
        <span className="relative animate-pulse duration-700 delay-700 inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 animate-gradient-text">
          {words[currentWord]}
        </span>
        <br />
        Developer
      </h2>

      <a
              href="/resume.png"
              download
              className="inline-flex items-center gap-2 px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base bg-gradient-to-r from-blue-500 to-indigo-600 text-purple-200 font-mono rounded-lg shadow-lg shadow-indigo-500/40 hover:scale-105 hover:shadow-indigo-500/70 transition-all duration-300"
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

</div>

{/* ✅ RIGHT SIDE */}
<div className="w-[40%] sm:w-[40%] md:w-[45%] lg:w-[50%] p-2 sm:p-4 md:p-6 lg:p-10">
  <div className="relative ml-auto 
w-40 h-48 
sm:w-52 sm:h-60 
md:w-64 md:h-72 
lg:w-80 lg:h-[360px] 
xl:w-96 xl:h-[420px]">

    <div className="absolute inset-0 bg-cyan-500 opacity-80 blur-2xl rounded-[40px]"></div>

    <div className="absolute inset-0 clip-hexagon bg-cyan-600/40 backdrop-blur-xl rounded-[40px]"></div>

    <img 
      src="/portfolioimage.png" 
      alt="Profile" 
      className="absolute inset-0 w-full h-full object-cover clip-hexagon rounded-[40px] shadow-2xl"
    />
  </div>
</div>

    </div>

    </Container>
  )
}

export default Intro