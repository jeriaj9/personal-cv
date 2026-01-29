import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-24 text-slate-900">
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Footer />
        </div>
    )
}

export default App
