import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Contact from './components/Contact/contact';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Destination from './pages/Destination/destination';
function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Why-us" element={<About />} />
        <Route path="/destinations" element={<Destination />} />
      </Routes>
     <Contact/>
    </>
  )
}

export default App
