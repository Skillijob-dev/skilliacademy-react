import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../shared/Button';
import Icons from '../shared/Icons';
import { useAuth } from '../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, isAuthenticated, logout } = useAuth();

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = async () => {
    await logout();
    setIsUserMenuOpen(false);
  };

  const goToDashboard = () => {
    if (currentUser) {
      if (currentUser.userType === 'candidate') {
        navigate('/dashboard-candidat');
      } else {
        navigate('/dashboard-entreprise');
      }
    }
    setIsUserMenuOpen(false);
  };

  // Fermer le menu utilisateur quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img
              src="/logo-skillijob.png"
              alt="Skillijob"
              className="navbar-logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '<span class="logo-text">Skillijob</span>';
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu desktop-menu">
            <Link
              to="/poei"
              className={`navbar-link ${location.pathname === '/poei' ? 'active' : ''}`}
            >
              POEI
            </Link>
            <Link
              to="/formation"
              className={`navbar-link ${location.pathname === '/formation' ? 'active' : ''}`}
            >
              Formation
            </Link>

            <Button
              variant="yellow"
              size="small"
              href="tel:+33970196702"
              icon={<Icons.Phone size={16} />}
            >
              09 70 19 67 02
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="navbar-menu mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/poei"
                className={`navbar-link ${location.pathname === '/poei' ? 'active' : ''}`}
              >
                POEI
              </Link>
              <Link
                to="/formation"
                className={`navbar-link ${location.pathname === '/formation' ? 'active' : ''}`}
              >
                Formation
              </Link>
              <Button
                variant="yellow"
                size="medium"
                href="tel:+33970196702"
                icon={<Icons.Phone size={16} />}
                className="mobile-cta"
              >
                09 70 19 67 02
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
