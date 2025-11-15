import React from 'react'
import Container from './container'

const Intro = () => {
  return (
    <Container>

    <div className="flex lg:flex-row justify-between ">
<div className="col col-lg-6">

      {/* <div className="c" */}
   <h1 className="text-lg text-[24px] text-teal-500">Hey,This is Sazib Hossain.</h1>
   <h2 className="text-lg text-[40px] ">I'm MERN Stack Developer</h2>
     
     <p className="w-[600px]">A self-taught UI/UX designer, functioning in the industry for 3+ years now.
I make meaningful and delightful digital products that create an equilibrium
between user needs and business goals.</p>
</div>
    
<div className="col col-lg-6 items-center">
    <img 
    className="h-100 mr-[40px] rounded-[100px] "
     src="portfolioimg.png.jpg" alt="" />

</div>
    </div>

    </Container>
  )
}

export default Intro