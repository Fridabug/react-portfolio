import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
    );
  
   
}

export default App;
