
import './App.css'
import Header from './Components/Header'
import Intro from './Components/Intro'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import About from './Components/About'
import Projects from './Components/Projects'



function App() {
  return (
    <div className="min-h-screen bg-[#11071F] text-white">
      <Header />
      <Intro/>
    <Skills/>
      <Experience/>
      <About/>
      <Contact/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App
