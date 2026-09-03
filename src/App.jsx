import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Highlights from './components/sections/Highlights.jsx'
import HowItWorks from './components/sections/HowItWorks.jsx'
import Tracks from './components/sections/Tracks.jsx'
import Technologies from './components/sections/Technologies.jsx'
import Pedagogy from './components/sections/Pedagogy.jsx'
import Coordination from './components/sections/Coordination.jsx'
import Rules from './components/sections/Rules.jsx'
import Faq from './components/sections/Faq.jsx'
import JoinCta from './components/sections/JoinCta.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <HowItWorks />
        <Tracks />
        <Technologies />
        <Pedagogy />
        <Coordination />
        <Rules />
        <Faq />
        <JoinCta />
      </main>
      <Footer />
    </>
  )
}

export default App
