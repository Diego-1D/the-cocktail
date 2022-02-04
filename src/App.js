import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CocktailDetails from './pages/CocktailDetails';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='container_app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cocktaildetails/:id' element={<CocktailDetails />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
