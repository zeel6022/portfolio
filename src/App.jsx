import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useState } from "react"
function App() {
  
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
            {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]" />
      
      {/* Navbar */}
           {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-white/10 bg-black/70 backdrop-blur-md z-50">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-bold">
            Zeel.
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-sm text-white/70">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-5 text-white/70 bg-black border-t border-white/10">

            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

          </div>
        )}

      </nav>

      {/* Hero Section */}
      <section
  id="home"
  className="min-h-screen flex items-center"
>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left */}
          <motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
            <p className="uppercase tracking-[0.3em] text-white/50 text-sm mb-6">
              Frontend Web Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Building Modern <br />
              React Websites
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
              I create responsive, modern, and user-focused websites
              using React JS, Tailwind CSS, and modern frontend tools.
            </p>
            
            

            <div className="flex gap-5 flex-wrap">
              <button className="px-7 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition">
                View Projects
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
                Contact Me
              </button>
              
                            <a
                href="/resume.pdf"
                download
                className="px-7 py-4 rounded-2xl border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition"
              >
                Download Resume
              </a>
              
            </div>
                        {/* Social Links */}
            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/"
                target="_blank"
                className="text-3xl text-white/60 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                className="text-3xl text-white/60 hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

            </div>
          </motion.div>
          

          {/* Right */}
          <div className="flex justify-center">
            <div className="w-[320px] h-[320px] rounded-[40px] bg-gradient-to-br from-cyan-400/30 to-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <h1 className="text-8xl font-bold text-cyan-300">
                Z
              </h1>
            </div>
          </div>
        
        </div>
        
      </section>
            {/* About Section */}
      <section
  id="about"
  className="py-32 border-t border-white/10"
>
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Passionate About Modern Web Experiences
            </h2>

            <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
              I'm a frontend developer focused on creating clean,
              responsive, and high-performance websites using React JS
              and modern frontend technologies. I enjoy building smooth
              user experiences with modern UI design.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-cyan-400/10 transition">
              <h3 className="text-xl font-semibold mb-2">
                React JS
              </h3>

              <p className="text-white/60 text-sm">
                Modern component-based frontend development.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-cyan-400/10 transition">
              <h3 className="text-xl font-semibold mb-2">
                Tailwind CSS
              </h3>

              <p className="text-white/60 text-sm">
                Fast and responsive modern UI styling.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-cyan-400/10 transition">
              <h3 className="text-xl font-semibold mb-2">
                JavaScript
              </h3>

              <p className="text-white/60 text-sm">
                Dynamic frontend logic and interactions.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-cyan-400/10 transition">
              <h3 className="text-xl font-semibold mb-2">
                Responsive Design
              </h3>

              <p className="text-white/60 text-sm">
                Mobile-first layouts for every device.
              </p>
            </div>

          </div>
        </div>
      </section>
      
            {/* Projects Section */}
      <section
  id="projects"
  className="py-32 border-t border-white/10"
>
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">
            <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-4">
              Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="group rounded-[32px] overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
>

              <div className="h-56 bg-gradient-to-br from-cyan-400/30 to-blue-500/10 flex items-center justify-center">
                <h1 className="text-7xl font-bold text-cyan-300/70">
                  01
                </h1>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Business Website
                </h3>

                <p className="text-white/60 leading-relaxed mb-6">
                  Modern responsive business website built using
                  React JS and Tailwind CSS.
                </p>

                <button className="px-5 py-3 rounded-xl bg-cyan-400 text-black font-semibold group-hover:scale-105 transition">
                  View Project
                </button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <div className="group rounded-[32px] overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300">

              <div className="h-56 bg-gradient-to-br from-purple-500/30 to-pink-500/10 flex items-center justify-center">
                <h1 className="text-7xl font-bold text-pink-300/70">
                  02
                </h1>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  E-commerce UI
                </h3>

                <p className="text-white/60 leading-relaxed mb-6">
                  Clean product showcase page with modern UI and
                  responsive mobile layout.
                </p>

                <button className="px-5 py-3 rounded-xl bg-white text-black font-semibold group-hover:scale-105 transition">
                  View Project
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-[32px] overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300">

              <div className="h-56 bg-gradient-to-br from-orange-500/30 to-red-500/10 flex items-center justify-center">
                <h1 className="text-7xl font-bold text-orange-300/70">
                  03
                </h1>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Dashboard Design
                </h3>

                <p className="text-white/60 leading-relaxed mb-6">
                  Interactive admin dashboard interface with modern
                  frontend components.
                </p>

                <button className="px-5 py-3 rounded-xl bg-orange-400 text-black font-semibold group-hover:scale-105 transition">
                  View Project
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
      
            {/* Contact Section */}
      <section
  id="contact"
  className="py-32 border-t border-white/10"
>
        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-white/60 text-lg leading-relaxed mb-12">
            I'm available for freelance projects, collaborations,
            and frontend development opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition">
              Email Me
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
              LinkedIn
            </button>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <h1 className="text-xl font-bold">
            Zeel.
          </h1>

          <p className="text-white/40 text-sm">
            © 2026 Zeel Portfolio. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  )
}

export default App