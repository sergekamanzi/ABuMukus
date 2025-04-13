import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
