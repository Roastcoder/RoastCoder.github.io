import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/Home';
import Ecosystems from './pages/Ecosystems';
import Archive from './pages/Archive';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecosystems" element={<Ecosystems />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
