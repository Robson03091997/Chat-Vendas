import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, Settings } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <BookOpen size={32} />
          <span>Escola de Inglês</span>
        </div>

        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <Home size={20} />
            Início
          </Link>
          
          <Link 
            to="/admin" 
            className={`nav-link ${location.pathname === '/admin' ? 'active' : ''}`}
          >
            <Settings size={20} />
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
