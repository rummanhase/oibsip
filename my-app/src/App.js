import './App.css';
import About from "./components/About";
import Contact from './components/Contact';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarSec from './components/NavbarSec';
import HomeScreen from './screen/HomeScreen';
import CartScreen from './screen/CartScreen';

function App() {
  return (
    <BrowserRouter>
      <Navbar sticky="top"/>
      <NavbarSec/>
      <Routes>
      <Route path="/login" element={<Home />} />
      <Route path="/cart" element={<CartScreen />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
