import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Guests from './pages/Guests';
import About from './pages/About';
import BecomeGuest from './pages/BecomeGuest';
import BecomeHost from './pages/BecomeHost';
import BecomePartner from './pages/BecomePartner';
import Contact from './pages/Contact';
import Press from './pages/Press';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router basename={import.meta.env.DEV ? "/intalks-react" : "/"}>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FDF8EE] text-[#111111]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/about" element={<About />} />
          <Route path="/become-guest" element={<BecomeGuest />} />
          <Route path="/become-host" element={<BecomeHost />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/press" element={<Press />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;