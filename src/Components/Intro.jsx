import React, { useEffect, useState } from 'react'
import Container from './container'
import {motion

}


const Intro = () => {
  const words = ["Front End", "Software", "MERN Stack"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants for each letter
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <Container>

    <div className="flex justify-between ">

 <div className="flex-7">
          <h1 className="ml-[10px] text-[32px] mt-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
            Hey, This is Sazib Hossain.
          </h1>

          <h2 className="ml-[10px] text-[64px] text-teal-100 md:text-[72px] font-bold mt-4 flex gap-2 flex-wrap">
            I'm{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400">
              {words[currentWord]
                .split("")
                .map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={letterAnimation}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
            </span>
            <br />
            Developer
          </h2>
        </div>

<div className="flex-5 p-10">
  <div className=" relative mx-auto w-72 h-80 md:w-80 md:h-[360px]">

    {/* Hexagon Glow Background */}
    <div className="absolute inset-0 bg-cyan-500 opacity-80 blur-2xl rounded-[40px]"></div>

    {/* Hexagon Shape */}
    <div className="absolute inset-0 clip-hexagon bg-cyan-600/40 backdrop-blur-xl rounded-[40px]"></div>

    {/* IMAGE */}
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