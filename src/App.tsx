
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import AcademicPrograms from './pages/Academic-Programs.tsx'
import News from './pages/News.tsx'
import Admission from './pages/Admission.tsx'

import AdmissionForm from "./pages/AdmissionForm";

import "./App.css";

function App() {
  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/academic-programs' element={<AcademicPrograms />} />
        <Route path='/news' element={<News />} />
        <Route path='/admission' element={<Admission />} />
      </Routes>
    </main>
    <Footer/>
    </>
  );
}

export default App;
