import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Intro from './Components/Intro'
import Experience from './Components/Experience'


function App() {
  return (
    <div className="min-h-screen bg-[#11071F] text-white">
      <Header />
      <Intro/>

      
      <Experience/>
    </div>
  );
}

export default App
