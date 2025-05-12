import { useState } from 'react'
import Header from './components/Header'
import HeroSection from './pages/HeroSection'
import AboutSection from './pages/AboutSection'
import ExperienceSection from './pages/ExperienceSection'
import ProjectsSection from './pages/ProjectsSection'
import ContactSection from './pages/ContactSection'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <div className="bg-gray-50" alt="IT Profile" data-id="v6937vz0" data-line="22-436">
        <Header />

        <HeroSection />

        <AboutSection />

        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

export default App
