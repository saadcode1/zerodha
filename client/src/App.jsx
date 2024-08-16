import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import Homewraper from './components/home/Homewraper';
import Aboutwrap from "./components/about/Aboutwrap";
import Pricinwraper from './components/pricing/Pricingwraper';
import Productwraper from './components/products/Pruductwraper';
import Signupwraper from './components/signup/Signupwraper';
import Supportwraper from './components/support/Supportwrapr';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
    <BrowserRouter>
   <Navbar/>
   
    <Routes>
      <Route path="/" element={<Homewraper/>}/>
      <Route path="/about" element={<Aboutwrap/>}/>
      <Route path="/signup" element={<Signupwraper/>}/>
      <Route path="/product" element={<Productwraper/>}/>
      <Route path="/pricing" element={<Pricinwraper/>}/>
      <Route path="/support" element={<Supportwraper/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
