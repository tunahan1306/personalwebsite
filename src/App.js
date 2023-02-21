import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Nopage from './pages/Nopage';
import Proje from './pages/Proje';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/projects/:projeId" element={<Proje />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Nopage />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
