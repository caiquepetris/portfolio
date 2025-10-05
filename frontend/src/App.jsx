
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Experience from "./components/Experience";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Header from './components/Header';
import Certifications from './components/certifications';


function App() {
  return (
    <div>
      <Header/>
      <AboutMe />     
      <Experience />  
      <Projects />     
      <Skills /> 
      <Certifications/>
      <Forms />        
      <Footer />       
    </div>
  )
}


export default App
