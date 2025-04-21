import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header className="py-3 px-6 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-medium text-black">
          Apple Gift Cards
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-black' : ''}`}>
            Главная
          </Link>
          <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'text-black' : ''}`}>
            Карты
          </Link>
          <Link to="/guide" className={`nav-link ${location.pathname === '/guide' ? 'text-black' : ''}`}>
            Инструкция
          </Link>
          <Link to="/style-test" className={`nav-link ${location.pathname === '/style-test' ? 'text-black' : ''}`}>
            Тест стиля
          </Link>
        </nav>
        
        <div className="md:hidden">
          <Link to="/products" className="nav-link text-apple-blue">
            Купить
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
