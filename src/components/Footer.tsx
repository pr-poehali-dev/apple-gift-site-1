const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-gray-100 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Apple Gift Cards. Все права защищены.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
              Поддержка
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
