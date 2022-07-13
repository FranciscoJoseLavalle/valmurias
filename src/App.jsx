import './App.css';
import Inicio from './components/Inicio/Inicio';
import NavBar from './components/NavBar/NavBar';
import Servicios from './components/Servicios/Servicios';
import Tienda from './components/Tienda/Tienda';
import Blog from './components/Blog/Blog';
import Contacto from './components/Contacto/Contacto';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/servicios' element={<Servicios />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contacto' element={<Contacto />} />
        
        <Route path='/*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
