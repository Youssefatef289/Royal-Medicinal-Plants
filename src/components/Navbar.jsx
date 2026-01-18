import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'
import '../styles/Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    // Check initial scroll position
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => location.pathname === path
  const isHomePage = location.pathname === '/'

  return (
    <nav className={`navbar ${isHomePage && !isScrolled ? 'transparent' : 'scrolled'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/image/royal-med-logo-removebg-preview.png" alt="Royal Medicinal Plants" className="logo-img" />
          <span className="logo-text">Royal Medicinal Plants</span>
        </Link>
        
        <div className="navbar-right">
          <button 
            className="language-toggle" 
            onClick={toggleLanguage}
            aria-label="Toggle language"
            title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            <img 
              src={language === 'en' ? '/image/Product/egypt.svg' : '/image/Product/en.svg'} 
              alt={language === 'en' ? 'Arabic' : 'English'}
              className="flag-icon"
            />
          </button>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={`navbar-link ${isActive('/services') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.services}
            </Link>
          </li>
          <li>
            <Link 
              to="/products" 
              className={`navbar-link ${isActive('/products') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.products}
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className={`navbar-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.gallery}
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

