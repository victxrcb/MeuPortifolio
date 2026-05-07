import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProgressBar from './components/ProgressBar'
import Divider from './components/Divider'

export default function App() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Stack />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
