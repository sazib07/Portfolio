import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Project from './Components/Intro'


function App() {
  return (
    <div className="min-h-screen bg-[#11071F] text-white">
      <Header />
      <Project/>
    </div>
  );
}

export default App
