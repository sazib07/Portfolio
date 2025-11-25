import React from 'react'
import Container from './container'

const Intro = () => {
  return (
    <Container>

    <div className="flex justify-between ">

<div className="flex-7">
   <h1 className="text-lg text-[24px] text-teal-500">Hey,This is Sazib Hossain.</h1>
   <h2 className="text-lg text-[40px] ">I'm MERN Stack<br/>Developer</h2>
     
     <p className="w-[600px]">A self-taught UI/UX designer, functioning in the industry for 3+ years now.
I make meaningful and delightful digital products that create an equilibrium
between user needs and business goals.</p>


</div>

<div className="flex-5 p-10">
  <div className=" relative mx-auto  w-72 h-80 md:w-80 md:h-[360px]">

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