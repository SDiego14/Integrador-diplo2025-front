import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importaciones correctas desde la carpeta components
import Navbar from './components/Navbar';
import Contacto from './components/Contacto';
import QuienesSomos from './components/QuienesSomos';
import Reservas from './components/Reservas';
import Carrusel from './components/Carrusel';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Carrusel />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/Reservas" element={<Reservas />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Pequeño componente para el contenido del Home
const HomeContent = () => (
  <>
    <header className="div1"><h1>The CONTINENTAL</h1></header>
    <div className="div1"><p className="p1">Bienvenido al lujo.</p></div>
    <div className="text-center"><img src="/assets/img/Hotel.jpg" alt="Hotel" style={{width: '80%'}} /></div>
  </>
);

export default App;