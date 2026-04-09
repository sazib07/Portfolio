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
    <div className="min-h-screen bg-[#11071F] text-white px-3 sm:px-4 md:px-8 lg:px-16 xl:px-20">
      <Header />
      <Intro />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App