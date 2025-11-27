import React from 'react'

const About = () => {
  return (
    <div>
      
    <section class="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
  <div class="max-w-5xl mx-auto text-center">
    
    <div class="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-indigo-500">
      <img src="/portfolioimage.png" alt="profile"/>
    </div>

    {/* <!-- Heading --> */}
    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800">
      👋 Hi, I'm <span class="text-indigo-600">Sazib Hossain</span>
    </h1>

    {/* <!-- Sub heading --> */}
    <p class="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
      A passionate MERN Stack Developer crafting intuitive, fast, and scalable web solutions.
      I love turning ideas into real products using clean & modern code.
    </p>

    {/* <!-- Highlight Boxes --> */}
    <div class="grid md:grid-cols-3 gap-6 mt-10">
      <div class="bg-white shadow-md rounded-xl p-6 hover:scale-[1.03] transition">
        <h3 class="text-xl font-semibold text-indigo-600">🎨 Frontend</h3>
        <p class="text-gray-600 mt-2">React, Tailwind, Next.js, UI Design & Animations</p>
      </div>

      <div class="bg-white shadow-md rounded-xl p-6 hover:scale-[1.03] transition">
        <h3 class="text-xl font-semibold text-indigo-600">🛠 Backend</h3>
        <p class="text-gray-600 mt-2">Node.js, Express.js, MongoDB, JWT Auth</p>
      </div>

      <div class="bg-white shadow-md rounded-xl p-6 hover:scale-[1.03] transition">
        <h3 class="text-xl font-semibold text-indigo-600">🚀 Goal</h3>
        <p class="text-gray-600 mt-2">Build products that make an impact.</p>
      </div>
    </div>

    {/* <!-- CTA Buttons --> */}
    <div class="mt-10 flex justify-center gap-4">
      <a href="#contact" class="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
        Contact Me
      </a>
      <a href="/projects" class="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300">
        View Projects
      </a>
    </div>
  </div>
</section>
    </div>
  )
}

export default About