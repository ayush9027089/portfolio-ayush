import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Nav from "./components/Nav" // Make sure file casing matches your file system
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {
  return (
    // Added scroll-smooth to the main container, though usually better in global CSS
    <div className="min-h-screen bg-gray-50">
      <Nav />
      
      {/* 1. HOME SECTION */}
      <section id="home">
        <Home />
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about">
        <About />
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience">
        <Experience />
      </section>

      {/* 4. SKILLS SECTION */}
      <section id="skills">
        <Skills />
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects">
        <Projects />
      </section>



      {/* 7. CONTACT SECTION */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default App