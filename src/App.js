import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Estudios from './components/estudios/estudios';
import Contacto from './components/contacto/contacto';
import Perfil from './components/perfil/perfil';
import Experiencia from './components/experiencia/experiencia';
import Referencias from './components/referencias/referencias';

function App() {
  return (
    <div className="App">
      <Header/>
      <Perfil />
      <Contacto />
      <Estudios />
      <Experiencia />
      <Referencias />
      <Footer />
    </div>
  );
}

export default App;
