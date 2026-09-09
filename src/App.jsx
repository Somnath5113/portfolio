import About from './components/About'
import Beyond from './components/Beyond'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SkillsShowcase from './components/SkillsShowcase'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillsShowcase />
        <Beyond />
        <Contact />
      </main>
    </>
  )
}

export default App
