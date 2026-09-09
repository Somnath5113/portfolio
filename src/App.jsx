import About from './components/About'
import Beyond from './components/Beyond'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import SceneBackground from './components/SceneBackground'
import OggySceneAnimation from './components/OggySceneAnimation'
import SkillsShowcase from './components/SkillsShowcase'
import './App.css'
import './styles/oggy-ghibli.css'

function App() {
  return (
    <>
      <SceneBackground />
      <OggySceneAnimation />
      <Navbar />
      <main className="site-main">
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

