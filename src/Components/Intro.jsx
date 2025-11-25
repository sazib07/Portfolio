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

<div className="flex justify-center items-center p-10">
  <div className="relative group">
    
    {/* Gradient Border */}
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition"></div>

    {/* Image Container */}
    <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-2 shadow-2xl">
      <img 
        src="portfolioimg.png.jpg"
        alt="Portfolio"
        className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-105"
      />
    </div>

  </div>
</div>



    </div>

    </Container>
  )
}

export default Intro