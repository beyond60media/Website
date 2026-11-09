import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ads from './pages/Ads';
import Weddings from './pages/Weddings';
import Services from './pages/Services';
import Careers from './pages/Careers';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { StaggeredMenu } from './components/StaggeredMenu';
import Preloader from './components/Preloader';

const PAGE_TITLES = {
  '/': 'Beyond60 | Creative Studio',
  '/ads': 'Ads & Commercials | Beyond60',
  '/weddings': 'Weddings | Beyond60',
  '/services': 'Services | Beyond60',
  '/careers': 'Careers | Beyond60',
  '/about': 'About Us | Beyond60',
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = PAGE_TITLES[pathname] || 'Beyond60 | Creative Studio';
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const menuItems = [
    { label: 'Services', ariaLabel: 'Go to services', link: '/services' },
    { label: 'Careers', ariaLabel: 'Go to careers', link: '/careers' },
    { label: 'About Us', ariaLabel: 'Go to about me', link: '/about' },
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/beyond60_/' },
    { label: 'YouTube', link: 'https://www.youtube.com/@Beyond60films' },
  ];

  return (
    <>
      <ScrollToTop />
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}
      <div 
        className="app-wrapper"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.6s ease',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Link 
          to="/" 
          className={`app-header-logo ${location.pathname === '/weddings' ? 'wedding-theme' : ''}`}
        >
          BEYOND60
        </Link>
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          colors={['#ff0000', '#990000']} 
          menuButtonColor={location.pathname === '/weddings' ? "#000000" : "#ffffff"}
          openMenuButtonColor="#000000"
        />
        <main id="app" className="fade-in" style={isHome ? { marginTop: 0 } : {}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
