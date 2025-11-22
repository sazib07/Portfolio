
import './App.css'
import Header from './Components/Header'
import Intro from './Components/Intro'
import Experience from './Components/Experience'
import Skills from './Components/Skills'


function App() {
  return (
    <div className="min-h-screen bg-[#11071F] text-white">
      <Header />
      <Intro/>
    <Skills/>
      <Experience/>
    </div>
  );
}

export default App
